(ns api.diplomat-test
  (:require [clojure.test :refer [deftest testing is]]
            [matcher-combinators.test :refer [match?]]
            [clj-http.client :as client]
            [api.diplomat :as d]
            [api.fixtures :as fixtures]))

(deftest url+query-params-test
  (testing "Without params"
    (is (= ["https://service.com/api/v2/pages" {}]
           (d/url+query-params "https://service.com/api/v2/pages" nil))))

  (testing "With route params"
    (is (= ["https://service.com/api/v2/users/11/lists/5" {}]
           (d/url+query-params "https://service.com/api/v2/users/:userId/lists/:listId"
                               {:userId 11 :listId "5"}))))

  (testing "With query params"
    (is (= ["https://service.com/api/v2/pages" {:sort "asc" :limit 10}]
           (d/url+query-params "https://service.com/api/v2/pages"
                               {:sort "asc" :limit 10}))))

  (testing "With route and query params"
    (is (= ["https://service.com/api/v2/users/11/lists/liked" {:sort "asc" :limit 10}]
           (d/url+query-params "https://service.com/api/v2/users/:userId/lists/:listName"
                               {:userId 11 :listName "liked" :sort "asc" :limit 10})))))

(deftest make-request-test
  (testing "Request map"
    (is (match?
         {:method :get
          :url "https://api.adviceslip.com/advice/37"
          :query-params {:order "desc"}
          :headers  {:Authorization "Bearer xxxx"}
          :body {:item "Test Request" :completed false}
          :as :json
          :throw-exceptions false}
         (with-redefs [client/request identity]
           (d/make-request
            (get-in fixtures/definition-map [:sources :GetAdviceSlipById])
            {:headers {:Authorization "Bearer xxxx"}
             :body {:item "Test Request" :completed false}
             :params {:adviceId 37 :order "desc"}}))))))
