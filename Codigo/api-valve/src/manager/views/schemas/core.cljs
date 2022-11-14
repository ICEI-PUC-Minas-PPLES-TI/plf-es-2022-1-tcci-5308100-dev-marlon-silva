(ns manager.views.schemas.core
  (:require [re-frame.core :as rf]
            [re-com.core :as rc :refer [at]]
            [manager.components.list :as list]
            [manager.routes :as routes]
            [manager.utils :as u]))

(defmulti form identity)

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
                  [form kind]]])))

(defmethod routes/panels :schemas [] [schemas-panel])
