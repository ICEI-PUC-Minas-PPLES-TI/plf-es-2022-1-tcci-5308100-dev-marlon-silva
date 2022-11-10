(ns manager.views.queries
  (:require [re-frame.core :as rf]
            [re-com.core :as rc :refer [at]]
            [manager.components.list :as list]
            [manager.routes :as routes]
            [manager.components.form :as form]))

(defn arg-form [path]
  ^{:key (last path)}
  [form/subform
   [form/subname-select-input (last path) "Name:" [:request] (butlast path)] 
   [form/composite-select-input :type "Type:" [:inputs] path
    ^{:key :delete}
    [:span.input-group-btn
     [form/button {:style :warning :label "Delete"}
      :delete-resource-property (butlast path) (last path)]]]])

(defn form []
  (let [base-path [:data :args]
        args (map first (get-in @(rf/subscribe [:get-resource]) base-path {}))]
    [form/scaffold
     [form/header]
     [form/inputs nil
      [form/name-input "Query"]
      [form/text-input :description "Description:" form/root]
      [form/composite-select-input :type "Type:" [:types] form/root]
      [form/single-select-input :resolve "Source:" [:sources] form/root]]
     [form/row :middle
      [:h4 [:span.page-header "Args:"]]
      [form/button {:style :info :label "Add"} :new-resource-property :args]]
     [form/subform-list :sm (map #(arg-form (conj base-path %)) (sort args))]
     [form/footer]]))

(defn queries-panel []
  [rc/h-box :src (at)
   :padding "3vh 5em 0 5em"
   :gap "5em"
   :justify :center
   :children [[rc/box :size "auto"
               :width "36.4%"
               :child [list/single-resource]]
              [form]]])

(defmethod routes/panels :queries [] [queries-panel])
