(ns api.server
  (:gen-class)
  (:require [io.pedestal.http :as http]
            [com.walmartlabs.lacinia.pedestal2 :as lp]
            [com.walmartlabs.lacinia.schema :as schema]
            [com.walmartlabs.lacinia.pedestal.internal :as internal]
            [com.walmartlabs.lacinia.util :as util]
            [clojure.edn :as edn]
            [api.resolver :as resolver]
            [api.diplomat :as diplomat]))

(defn load-definition [] (edn/read-string (slurp "./resources/definition.edn")))

(defn create-service
  [compiled-schema options]
  (let [{:keys [api-path ide-path port host env cors]
         :or {api-path "/api"
              ide-path "/graphiql"
              port 8080
              host "localhost"
              env :dev}} options
        asset-path "/assets/graphiql"
        interceptors (lp/default-interceptors compiled-schema nil options)
        graphiql-handler (fn [_] (internal/graphiql-response api-path "/ws" asset-path {} nil))
        routes (into #{[api-path :post interceptors :route-name ::graphql-api]
                       [ide-path :get graphiql-handler :route-name ::graphiql-ide]}
                     (lp/graphiql-asset-routes asset-path))]
    (cond-> {:env env
             ::http/routes routes
             ::http/port port
             ::http/host host
             ::http/type :jetty
             ::http/join? false}
      (some? cors) (assoc ::http/allowed-origins cors)
      (= env :dev) (assoc ::http/secure-headers nil))))

(def new-service
  (let [{:keys [graphql config] :as definition} (load-definition)
        schemas (->> diplomat/make-request
                     (resolver/definition->resolvers definition)
                     (util/attach-resolvers graphql)
                     (schema/compile))]
    [schemas config]))

(def service (apply create-service new-service))

;; This is an adapted service map, that can be started and stopped.
;; From the REPL you can call http/start and http/stop on this service:
(defonce runnable-service (http/create-server service))

(defn -main
  "The entry-point for 'lein run'"
  [& args]
  (println "\nCreating server...")
  (http/start runnable-service))
