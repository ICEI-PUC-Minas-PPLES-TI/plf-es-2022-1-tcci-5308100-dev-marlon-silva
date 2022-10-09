(ns manager.views.apis
  (:require [re-com.core :as rc :refer [at]]
            [manager.components.list :as list]
            [manager.components.form :as form]
            [manager.routes :as routes]))

(defn form []
  [form/scaffold
   [form/header]
   [form/inputs nil
    [form/name-input "API"]
    [form/text-input :description "Description:" form/root]
    [form/single-select-input :method "Method:" [:methods] form/root]
    [form/text-input :uri "URI:" form/root]]
   [form/footer]])

(defn apis-panel []
  [rc/h-box :src (at)
   :padding "3vh 5em 0 5em"
   :gap "5em"
   :justify :center
   :children [[rc/box :size "auto"
               :width "36.4%"
               :child [list/single-resource]]
              [form]]])

(defmethod routes/panels :apis [] [apis-panel])
