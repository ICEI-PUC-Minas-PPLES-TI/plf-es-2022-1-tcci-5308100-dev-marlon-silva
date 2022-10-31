(ns api.server-test
  (:require [clojure.test :refer [deftest testing is]]
            [matcher-combinators.test :refer [match?]]
            [api.server :as s]
            [api.fixtures :as fixtures]
            [io.pedestal.http :as http]
            [com.walmartlabs.lacinia.schema :as schema]
            [com.walmartlabs.lacinia.util :as util]
            [com.walmartlabs.lacinia.pedestal2 :as lp]
            [com.walmartlabs.lacinia.pedestal.internal :as i]))

(def service-tuple
  [{:objects
    {:Advice 
     {:description "Advice Slip"
      :fields
      {:id {:type '(non-null :ID)}
       :advice {:type '(non-null :String)}}}}
    :input-objects
    {:adviceParams
     {:fields
      {:adviceId {:type '(non-null :ID)}}}}
    :queries
    {:adviceById
     {:type :Advice
      :description "Get an advice slip by ID"
      :resolve fn?
      :args
      {:params {:type :adviceParams}}}}}
   {:name "bff-squared"
    :description "Um framework para construção de BFFs"}])

(deftest create-service-test
  (with-redefs [lp/default-interceptors (constantly nil)
                i/graphiql-response (constantly nil)
                lp/graphiql-asset-routes (constantly nil)]

    (testing "Creating service map with defaults"
      (is (match?
           {:env :dev
            ::http/routes set?
            ::http/port 8080
            ::http/host "localhost"
            ::http/type :jetty
            ::http/join? false
            ::http/secure-headers nil}
           (apply s/create-service service-tuple))))

    (testing "Creating service map with config"
      (is (match?
           {:env :prod
            ::http/routes set?
            ::http/port 8080
            ::http/host "localhost"
            ::http/type :jetty
            ::http/join? false}
           (apply s/create-service (update-in service-tuple [1] assoc
                                              :env :prod
                                              :cors ["http:localhost:8280"])))))))

(defn- attach-resolvers-mock
  [schemas _]
  (assoc-in schemas [:queries :adviceById :resolve] (constantly nil)))

(defn- load-definition-mock []
  (update-in fixtures/definition-map [:graphql :queries] dissoc :randomAdvice))

(deftest new-service-test
  (with-redefs [s/load-definition load-definition-mock
                util/attach-resolvers attach-resolvers-mock
                schema/compile identity]
    (testing "Building a new service using edn + resolver + diplomat"
      (is (match? service-tuple (s/new-service))))))
