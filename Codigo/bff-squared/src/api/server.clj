(ns api.server
  (:gen-class)
  (:require [io.pedestal.http :as http]
            [com.walmartlabs.lacinia.pedestal2 :as lp]
            [com.walmartlabs.lacinia.schema :as schema]
            [com.walmartlabs.lacinia.util :as util]
            [clojure.edn :as edn]
            [api.resolver :as resolver]
            [api.diplomat :as diplomat]))

(defn load-definition [] (edn/read-string (slurp "./resources/definition.edn")))

(def schemas
  (let [definition (load-definition)]
    (->> diplomat/make-request
         (resolver/definition->resolvers definition)
         (util/attach-resolvers (:graphql definition))
         (schema/compile))))

(def service (lp/default-service schemas nil))

;; This is an adapted service map, that can be started and stopped.
;; From the REPL you can call http/start and http/stop on this service:
(defonce runnable-service (http/create-server service))

(defn -main
  "The entry-point for 'lein run'"
  [& args]
  (println "\nCreating server...")
  (http/start runnable-service))
