(ns manager.views.settings
  (:require [re-frame.core :as rf]
            [re-com.core :as rc :refer [at]]
            [manager.routes :as routes]))

(defn settings-panel []
  [rc/h-box :src (at)
   :justify :around
   :children [[:span "settings list"]
              [:span "settings form"]]])

(defmethod routes/panels :settings-panel [] [settings-panel])