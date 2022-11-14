(ns api.server
  (:gen-class)
  (:require [clojure.edn :as edn]
            [clojure.set :as set]
            [io.pedestal.http :as http]
            [com.walmartlabs.lacinia.pedestal2 :as lp]
            [com.walmartlabs.lacinia.schema :as schema]
            [com.walmartlabs.lacinia.pedestal.internal :as i]
            [com.walmartlabs.lacinia.util :as util]
            [environ.core :refer [env]]
            [api.resolver :as resolver]
            [api.diplomat :as diplomat]))

(defn load-definition [] (edn/read-string (slurp (env :definition-path))))

(defn create-service [compiled-schema options]
  (let [{:keys [api-path ide-path port host env cors]
         :or {api-path "/api"
              ide-path "/graphiql"
              port 8080
              host "localhost"
              env :dev}} options
        asset-path "/assets/graphiql"
        interceptors (lp/default-interceptors compiled-schema nil options)
        graphiql-handler (fn [_] (i/graphiql-response api-path "/ws" asset-path {} nil))
        routes (set/union #{[api-path :post interceptors :route-name ::graphql-api]}
                          (when (not= env :prod)
                            (into #{[ide-path :get graphiql-handler :route-name ::graphiql-ide]}
                                  (lp/graphiql-asset-routes asset-path))))]
    (cond-> {:env env
             ::http/routes routes
             ::http/port port
             ::http/host host
             ::http/type :jetty
             ::http/join? false}
      (some? cors) (assoc ::http/allowed-origins cors)
      (not= env :prod) (assoc ::http/secure-headers nil))))

(defn new-service []
  (let [{:keys [graphql config] :as definition} (load-definition)
        schemas (->> diplomat/make-request
                     (resolver/definition->resolvers definition)
                     (util/attach-resolvers graphql)
                     (schema/compile))]
    [schemas config]))

(def service (apply create-service (new-service)))

(defonce runnable-service (http/create-server service))

(defn -main [& args]
  (println "\nServer running...")
  (http/start runnable-service))
