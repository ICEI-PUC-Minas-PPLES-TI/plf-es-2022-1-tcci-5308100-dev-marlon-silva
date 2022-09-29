(ns manager.controller-test
  (:require [cljs.test :refer-macros [deftest is testing]]
            [manager.handlers :as h]
            [manager.fixtures :as fixtures]
            [clojure.set]))

(deftest update-resource-test
  (testing "Rename field"
    (is (= {:resource {:old-name "old"
                       :name "current"
                       :data {:description "info"
                              :fields {:id {:type #{"non-null" "ID"}}
                                       :message {:type #{"String"}}}}}}
           (h/update-resource
            {:resource {:old-name "old"
                        :name "current"
                        :data {:description "info"
                               :fields {:uuid {:type #{"non-null" "ID"}}
                                        :message {:type #{"String"}}}}}}
            [nil [:data :fields] clojure.set/rename-keys {:uuid :id}]))))

  (testing "Change name"
    (is (= {:resource {:old-name "old"
                       :name "new"
                       :data {:description "info"
                              :fields {:id {:type #{"non-null" "ID"}}
                                       :message {:type #{"String"}}}}}}
           (h/update-resource
            {:resource {:old-name "old"
                        :name "current"
                        :data {:description "info"
                               :fields {:id {:type #{"non-null" "ID"}}
                                        :message {:type #{"String"}}}}}}
            [nil [] assoc :name "new"]))))

  (testing "Add info"
    (is (= {:resource {:old-name "old"
                       :name "current"
                       :data {:description "info"
                              :source :Example
                              :fields {:id {:type #{"non-null" "ID"}}
                                       :message {:type #{"String"}}}}}}
           (h/update-resource
            {:resource {:old-name "old"
                        :name "current"
                        :data {:description "info"
                               :fields {:id {:type #{"non-null" "ID"}}
                                        :message {:type #{"String"}}}}}}
            [nil [:data] assoc :source :Example]))))

  (testing "Change type"
    (is (= {:resource {:old-name "old"
                       :name "current"
                       :data {:description "info"
                              :fields {:id {:type #{"non-null" "ID"}}
                                       :message {:type #{"list" "String"}}}}}}
           (h/update-resource
            {:resource {:old-name "old"
                        :name "current"
                        :data {:description "info"
                               :fields {:id {:type #{"non-null" "ID"}}
                                        :message {:type #{"String"}}}}}}
            [nil [:data :fields :message :type] conj "list"])))
    (is (= {:resource {:old-name "old"
                       :name "current"
                       :data {:description "info"
                              :fields {:id {:type #{"ID"}}
                                       :message {:type #{"String"}}}}}}
           (h/update-resource
            {:resource {:old-name "old"
                        :name "current"
                        :data {:description "info"
                               :fields {:id {:type #{"non-null" "ID"}}
                                        :message {:type #{"String"}}}}}}
            [nil [:data :fields :id :type] disj "non-null"])))))

(deftest new-resource-property-test
  (testing "New default property"
    (is (= {:resource {:old-name "old"
                       :name "current"
                       :data {:description "info"
                              :fields {:id {:type #{"non-null" "ID"}}
                                       :message {:type #{"list" "String"}}
                                       :field3 {}}}}}
           (h/new-resource-property
            {:resource {:old-name "old"
                        :name "current"
                        :data {:description "info"
                               :fields {:id {:type #{"non-null" "ID"}}
                                        :message {:type #{"list" "String"}}}}}}
            [nil :fields])))))

(deftest new-resource-test
  (testing "New blank resource"
    (is (= {:resource {:old-name nil}}
           (h/new-resource {} [])))))

(def db-after-load
  {:panel->path {:queries [:graphql :queries]}
   :active-panel :queries
   :resource-list {:hello
                   {:type :String
                    :description "Say helloooou"
                    :resolve :hello-resolve}}
   :names {:primitives ["String" "Int" "Long" "Boolean" "ID"]
           :interfaces ["Human" "Employee"]
           :types ["Project" "Designer"]
           :inputs []
           :enums []
           :unions []
           :mutations []
           :queries ["hello"]
           :sources ["github"]}})

(deftest select-resource-test
  (testing "Load a resource by name"
    (is (= (assoc db-after-load :resource
                  {:path [:graphql :queries]
                   :old-name "hello"
                   :name "hello"
                   :data {:type :String
                          :description "Say helloooou"
                          :resolve :hello-resolve}})
           (h/select-resource db-after-load [nil :hello])))))

(deftest load-all-resources-success-test
  (testing "Load resource list and all names"
    (is (= db-after-load
           (h/load-all-resources-success
            {:panel->path {:queries [:graphql :queries]}
             :active-panel :queries}
            [nil fixtures/definition-map])))))
