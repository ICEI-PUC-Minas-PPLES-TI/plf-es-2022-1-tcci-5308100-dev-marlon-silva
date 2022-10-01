(ns manager.views.schemas
  (:require [re-frame.core :as rf]
            [re-com.core :as rc :refer [at]]
            [manager.components.list :as list]
            [manager.components.form :as form]
            [manager.routes :as routes]
            [manager.utils :as u]))

(defmulti schemas-form identity)

(defn field-form [path]
  ^{:key (last path)}
  [form/subform
   [form/subname-input (last path) (butlast path)]
   [form/text-input :description "Description:" path]
   [form/single-select-input :type "Type:" [:primitives :types] path
    ^{:key :list} [form/checkbox :type "List" "list" path]
    ^{:key :non-null} [form/checkbox :type "Required" "non-null" path]]
  ;;  [form/text-input :default-value "Default value:" path]
   [form/text-input-with-toggle :deprecated "Deprecated:" :isDeprecated path
    ^{:key :delete}
    [:span.input-group-btn
     [form/button {:style :warning :label "Delete"}
      :delete-resource-property (butlast path) (last path)]]]])

(defmethod schemas-form :types []
  (let [base-path [:data :fields]
        fields (map first (get-in @(rf/subscribe [:get-resource]) base-path {}))
        valid-resource? @(rf/subscribe [:check-resource])]
    [form/scaffold
     [form/row :top
      [form/button {:style :success :label "Create New"} :new-resource]
      [form/alert]
      [form/button {:style :danger :label "Delete" :reload? true} :delete-resource]]
     [form/inputs
      [form/name-input "Type"]
      [form/text-input :description "Description:" form/root]
      [form/multi-select-input :implements "Implements:" [:interfaces] form/root]]
     [form/row :middle
      [:h4 [:span.page-header "Fields:"]]
      [form/button {:style :info :label "Add"} :new-resource-property :fields]]
     [form/subform-list :md (map #(field-form (conj base-path %)) (sort fields))]
     [form/footer
      [form/button {:style :primary :label "Save"
                    :reload? true :disabled? (not valid-resource?)} :save-resource]]]))

(defmethod schemas-form :inputs []
  [form/scaffold
   [form/row :top
    [:button.btn.btn-success "Create New"]
    [:button.btn.btn-danger "Delete"]]
   [form/name-input "Input"]
   [form/text-input :description "Description:" form/root]])

(defmethod schemas-form :interfaces []
  [form/scaffold
   [form/row :top
    [:button.btn.btn-success "Create New"]
    [:button.btn.btn-danger "Delete"]]
   [form/name-input "Interface"]
   [form/text-input :description "Description:" form/root]])

(defmethod schemas-form :unions []
  [form/scaffold
   [form/row :top
    [:button.btn.btn-success "Create New"]
    [:button.btn.btn-danger "Delete"]]
   [form/name-input "Union"]
   [form/text-input :description "Description:" form/root]
   [form/multi-select-input :members "Members:" [:types] form/root]])

(defmethod schemas-form :enums []
  [form/scaffold
   [form/row :top
    [:button.btn.btn-success "Create New"]
    [:button.btn.btn-danger "Delete"]]
   [form/name-input "Enum"]
   [form/text-input :description "Description:"] form/root])

(defn schemas-panel []
  (let [active-panel @(rf/subscribe [:get-active-panel])
        kind (second (u/panel->vector active-panel))]
    (if-not kind
      (rf/dispatch [:redirect :schemas_types])
      [rc/h-box :src (at)
       :padding "3vh 5em 0 5em"
       :gap "5em"
       :justify :center
       :children [[list/multi-resources active-panel]
                  [schemas-form kind]]])))

(defmethod routes/panels :schemas [] [schemas-panel])
