(ns manager.views.settings
  (:require [re-com.core :as rc :refer [at]]
            [manager.components.form :as form]
            [manager.routes :as routes]))

(defn form []
  [form/scaffold
   [form/alert]
   [rc/gap :size "2vh"]
   [form/inputs "1.5vh"
    [form/text-input :name "Name:" form/root]
    [form/text-input :description "Description:" form/root]
    [form/text-input :api-path "API Path:" form/root]
    [form/text-input :ide-path "IDE Path:" form/root]
    [form/single-select-input :env "Enviroment:" [:env] form/root]
    [form/text-input :host "Host:" form/root]
    [form/text-input :port "Port:" form/root]
    [form/text-input :cors "CORS:" form/root]]
   [rc/gap :size "0.5vh"]
   [form/footer]])

(defn settings-panel []
  [rc/v-box :src (at)
   :padding "1vh 5em 0 5em"
   :gap "0vh"
   :align :center
   :justify :center
   :children [[:h3.page-header "Server Configuration"]
              [rc/h-box :width "40%" :children [[form]]]]])

(defmethod routes/panels :settings [] [settings-panel])
