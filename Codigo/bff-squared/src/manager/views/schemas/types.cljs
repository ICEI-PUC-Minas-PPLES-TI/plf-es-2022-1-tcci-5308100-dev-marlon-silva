(ns manager.views.schemas.types
  (:require [re-frame.core :as rf] 
            [manager.components.form :as form]
            [manager.views.schemas.core :as schemas]))

(defn field-form [path]
  ^{:key (last path)}
  [form/subform
   [form/subname-input (last path) (butlast path)]
   [form/text-input :description "Description:" path]
   [form/composite-select-input :type "Type:" [:scalar :types :enums] path
    ^{:key :list} [form/checkbox :type "List" "list" path]
    ^{:key :non-null} [form/checkbox :type "Required" "non-null" path]]
   [form/text-input-with-toggle :deprecated "Deprecated:" :isDeprecated path
    ^{:key :delete}
    [:span.input-group-btn
     [form/button {:style :warning :label "Delete"}
      :delete-resource-property (butlast path) (last path)]]]])

(defmethod schemas/form :types []
  (let [base-path [:data :fields]
        fields (map first (get-in @(rf/subscribe [:get-resource]) base-path {}))]
    [form/scaffold
     [form/header]
     [form/inputs nil
      [form/name-input "Type"]
      [form/text-input :description "Description:" form/root]
      [form/multi-select-input :implements "Implements:" [:interfaces] form/root]]
     [form/row :middle
      [:h4 [:span.page-header "Fields:"]]
      [form/button {:style :info :label "Add"} :new-resource-property :fields]]
     [form/subform-list :md (map #(field-form (conj base-path %)) (sort fields))]
     [form/footer]]))
