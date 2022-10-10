(ns manager.views.schemas.enums
  (:require [re-frame.core :as rf]
            [manager.components.form :as form]
            [manager.views.schemas.core :as schemas]))

(defn value-form [path]
  ^{:key (last path)}
  [form/subform
   [form/text-input :enum-value "Value:" path]
   [form/text-input :description "Description:" path]
   [form/text-input-with-toggle :deprecated "Deprecated:" :isDeprecated path
    ^{:key :delete}
    [:span.input-group-btn
     [form/button {:style :warning :label "Delete"}
      :delete-resource-property (butlast path) (last path) true]]]])

(defmethod schemas/form :enums []
  (let [base-path [:data :values]
        values (get-in @(rf/subscribe [:get-resource]) base-path {})]
    [form/scaffold
     [form/header]
     [form/inputs nil
      [form/name-input "Enum"]
      [form/text-input :description "Description:" form/root]]
     [form/row :middle
      [:h4 [:span.page-header "Values:"]]
      [form/button {:style :info :label "Add"} :new-resource-property :values true]]
     [form/subform-list :lg (map-indexed (fn [idx _] (value-form (conj base-path idx))) (sort-by :enum-value values))]
     [form/footer]]))
