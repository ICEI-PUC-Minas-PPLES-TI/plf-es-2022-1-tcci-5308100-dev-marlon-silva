(ns api.server
  (:gen-class)
  (:require [io.pedestal.http :as http]
            [com.walmartlabs.lacinia.pedestal2 :as lp]
            [com.walmartlabs.lacinia.schema :as schema]
            [com.walmartlabs.lacinia.util :as util]
            [clojure.edn :as edn]))

(defn load-definition [] (edn/read-string (slurp "./resources/definition.edn")))

(defn resolvers-map [definition]
  (-> (reduce #(assoc %1 %2 (fn [_ _ _] (name %2))) {} (map (comp :resolve second) (:queries definition)))
      (assoc :greeting-t-resolve (fn [_ _ _] ["c" "a" "b"]))
      (assoc :greeting-resolve (fn [_ _ _] {:id "4" :name "Des" :kind "JEDI" :url "http" :games ["aaa" "bbb"]}))))

(def hello-schema
  (let [definition (:graphql (load-definition))]
    (-> definition
        (util/attach-resolvers (resolvers-map definition))
        (schema/compile))))

(def service (lp/default-service hello-schema nil))

;; This is an adapted service map, that can be started and stopped.
;; From the REPL you can call http/start and http/stop on this service:
(defonce runnable-service (http/create-server service))

(defn -main
  "The entry-point for 'lein run'"
  [& args]
  (println "\nCreating server...")
  (http/start runnable-service))
