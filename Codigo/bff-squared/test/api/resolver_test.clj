(ns api.resolver-test
  (:require [clojure.test :refer [deftest testing is]]
            [api.fixtures :as fixtures]
            [matcher-combinators.test :refer [match?]]
            [api.resolver :as r]))

(deftest get-source!-test
  (testing "Undefined source"
    (is (thrown-with-msg? clojure.lang.ExceptionInfo
                          #"Source 'IMDb' not defined or incomplete."
                          (r/get-source! {:GitHub {:method :get :uri "https://github.com"}} :IMDb))))

  (testing "Incomplete source"
    (is (thrown-with-msg? clojure.lang.ExceptionInfo
                          #"Source 'GitHub' not defined or incomplete."
                          (r/get-source! {:GitHub {:method :get}} :GitHub))))

  (testing "Existing and complete source"
    (is (= {:method :get :uri "https://github.com"}
           (r/get-source! {:GitHub {:method :get :uri "https://github.com"}} :GitHub)))))

(deftest new-resolver-test
  (testing "Returns a resolver function"
    (is (fn? (r/new-resolver (fn [source args response-path] [source args response-path])
                             {:method :get :uri "https://github.com"}))))

  (testing "Returns the resolver result"
    (is (= [{:method :get :uri "https://github.com"} {:params {:repo "clojure"}} nil]
           ((r/new-resolver (fn [source args response-path] [source args response-path])
                            {:method :get :uri "https://github.com"})
            nil {:params {:repo "clojure"}} nil)))))

(deftest definition->resolvers-test
  (testing "Missing source"
    (is (thrown-with-msg? clojure.lang.ExceptionInfo
                          #"Source 'GetRandomAdvice' not defined or incomplete."
                          (r/definition->resolvers fixtures/definition-map (fn [source args] [source args])))))

  (testing "Missing response-path"
    (is (thrown-with-msg? clojure.lang.ExceptionInfo
                          #"The source 'GetAdviceSlipById' has not a valid response-path."
                         ((:get-in (r/definition->resolvers
                                     (update-in fixtures/definition-map [:graphql :queries] dissoc :randomAdvice)
                                     (fn [source args] [source args]))) :GetAdviceSlipById []))))

  (testing "Returns a resolvers map"
    (is (match? {:GetAdviceSlipById fn?}
                (r/definition->resolvers
                  (update-in fixtures/definition-map [:graphql :queries] dissoc :randomAdvice)
                  (fn [source args] [source args]))))))
