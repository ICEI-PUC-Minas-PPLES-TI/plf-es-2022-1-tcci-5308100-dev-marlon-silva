(ns manager.controller-test
  (:require [cljs.test :refer-macros [deftest is testing]]
            [clojure.set]
            [manager.handlers :as h]))

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
  (testing "Blank resource"
    (is (= {:resource {:old-name nil}}
           (h/new-resource {} [])))))
