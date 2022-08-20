;; This example is based off of the code generated from the template
;;  `lein new pedestal-service graphql-demo`

(ns api.server
  (:gen-class) ; for -main method in uberjar
  (:require [io.pedestal.http :as http]
            [com.walmartlabs.lacinia.pedestal2 :as lp]
            [com.walmartlabs.lacinia.schema :as schema]))

(def hello-schema
  (schema/compile
   {:queries
    {:hello
        ;; String is quoted here; in EDN the quotation is not required 
        ;; You could also use :String
     {:type :String
      :description "Say helloooou"
      :resolve (constantly "world")}
     
     :bye
     {:type :String
      :description "Say goodbyeee"
      :resolve (constantly "see you")}}}))

;; Use default options:
(def service (lp/default-service hello-schema nil))

;; This is an adapted service map, that can be started and stopped.
;; From the REPL you can call http/start and http/stop on this service:
(defonce runnable-service (http/create-server service))

(defn -main
  "The entry-point for 'lein run'"
  [& args]
  (println "\nCreating your server...")
  (http/start runnable-service))
