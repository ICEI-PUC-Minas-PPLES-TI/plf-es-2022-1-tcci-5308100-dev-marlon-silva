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

(deftest delete-resource-property-test
  (testing "Delete resource property by name"
    (is (= {:resource {:old-name "old"
                       :name "current"
                       :data {:description "info"
                              :fields {:id {:type #{"non-null" "ID"}}
                                       :message {:type #{"list" "String"}}}}}}
           (h/delete-resource-property
            {:resource {:old-name "old"
                        :name "current"
                        :data {:description "info"
                               :fields {:id {:type #{"non-null" "ID"}}
                                        :message {:type #{"list" "String"}}
                                        :any-field {:type "String"}}}}}
            [nil [:data :fields] :any-field])))))

(deftest new-resource-test
  (testing "New blank resource"
    (is (= {:panel->path {:queries [:graphql :queries]}
            :active-panel :queries
            :resource {:path [:graphql :queries] :old-name nil}}
           (h/new-resource
            {:panel->path {:queries [:graphql :queries]}
             :active-panel :queries}
            [])))))

(def db-default-names
  {:default [nil]
   :env ["dev" "staging" "prod"]
   :scalar  ["String" "Int" "Long" "Boolean" "ID"]
   :request ["body" "headers" "params"]
   :methods ["GET" "POST" "PATCH" "PUT" "DELETE"]})

(def db-after-load
  {:panel->path {:queries [:graphql :queries]}
   :active-panel :queries
   :resource {:path [:graphql :queries]}
   :resource-list {:hello
                   {:type :String
                    :description "Say helloooou"
                    :resolve :hello-resolve}}
   :names (merge db-default-names
                 {:interfaces ["Human" "Employee"]
                  :types ["Project" "Designer"]
                  :inputs []
                  :enums []
                  :unions []
                  :mutations []
                  :queries ["hello"]
                  :sources ["github"]})})

(deftest select-resource-test
  (testing "Select a resource by name"
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
             :active-panel :queries
             :names db-default-names}
            [nil fixtures/definition-map])))))

(deftest select-config-test
  (testing "Select config data"
    (is (= {:resource-list {:name "Test App"
                            :description "BFF using GraphQL"}
            :resource {:path []
                       :old-name "config"
                       :name "config"
                       :data {:name "Test App"
                              :description "BFF using GraphQL"}}}
           (h/select-config
            {:resource-list {:name "Test App"
                             :description "BFF using GraphQL"}}
            [])))))

(deftest check-resource-test
  (testing "Valid resource of kind Object"
    (is (true? (h/check-resource
                {:resource {:path [:graphql :objects]
                            :old-name nil
                            :name "New Type"
                            :data {:description "Type for testing"
                                   :implements ["Any"]
                                   :fields {:field1 {:type #{"String"}}
                                            :fieldn {:type #{"list" "String"}
                                                     :isDeprecated true
                                                     :deprecated "Old field"}}}}}
                []))))

  (testing "Invalid resource of kind Object"
    (is (false? (h/check-resource
                {:resource {:path [:graphql :objects]
                            :old-name nil
                            :name "New Type"
                            :data {:description "Type for testing"
                                   :implements ["Any"]
                                   :fields {:field1 {:type #{"non-null"}}
                                            :fieldn {:type #{"list" "String"}
                                                     :isDeprecated true
                                                     :deprecated "Old field"}}}}}
                [])))))
