(ns manager.storage-test
  (:require [cljs.test :refer-macros [deftest is testing]]
            [manager.storage :as s]
            [aux.fixtures-test :as fixtures]))

(deftest assoc-definition-test
  (testing "With same old name"
    (is (= (assoc-in fixtures/definition-map [:graphql :interfaces :Human] {:description "Example" :fields {:age {:type :Int}}})
           (s/assoc-definition fixtures/definition-map
                               [:graphql :interfaces]
                               {:name "Human"
                                :old-name "Human"
                                :data {:description "Example"
                                       :fields {:age {:type "Int"}}}}))))

  (testing "With differente old name"
    (is (= (-> fixtures/definition-map
               (update-in [:graphql :interfaces] dissoc :Human)
               (assoc-in [:graphql :objects :Designer :fields :team :type] '(list (non-null :New)))
               (assoc-in [:graphql :objects :Designer :implements] [:Employee :New])
               (assoc-in [:graphql :interfaces :New] {:description "Example" :fields {:age {:type :Int}}}))
           (s/assoc-definition fixtures/definition-map
                               [:graphql :interfaces]
                               {:name "New"
                                :old-name "Human"
                                :data {:description "Example"
                                       :fields {:age {:type "Int"}}}}))))

  (testing "Without old name and available name"
    (is (= (assoc-in fixtures/definition-map [:graphql :interfaces :New] {:description "Example" :fields {:age {:type :Int}}})
           (s/assoc-definition fixtures/definition-map
                               [:graphql :interfaces]
                               {:name "New"
                                :data {:description "Example"
                                       :fields {:age {:type "Int"}}}}))))

  (testing "Without old name and unavailable name"
    (is (thrown-with-msg? js/Error
                          #"This name already exists."
                          (s/assoc-definition fixtures/definition-map
                                              [:graphql :interfaces]
                                              {:name "Designer"
                                               :data {:description "Example"
                                                      :fields {:age {:type "Int"}}}})))))

(deftest dissoc-definition-test
  (testing "Non-existent resource"
    (is (= fixtures/definition-map
           (s/dissoc-definition fixtures/definition-map [:graphql :interfaces] :New))))

  (testing "Unused resource"
    (is (= (update-in fixtures/definition-map [:sources] dissoc :github)
           (s/dissoc-definition fixtures/definition-map [:sources] :github))))

  (testing "Used resource"
    (is (thrown-with-msg? js/Error
                          #"This resource is still used by others."
                          (s/dissoc-definition fixtures/definition-map [:graphql :interfaces] :Human)))
    (is (thrown-with-msg? js/Error
                          #"This resource is still used by others."
                          (s/dissoc-definition fixtures/definition-map [:graphql :objects] :Project)))))
