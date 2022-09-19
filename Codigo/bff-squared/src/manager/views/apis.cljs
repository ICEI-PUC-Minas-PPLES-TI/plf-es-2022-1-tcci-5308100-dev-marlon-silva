(ns manager.views.apis
  (:require [re-frame.core :as rf]
            [re-com.core :as rc :refer [at]]
            [manager.routes :as routes]))

(defn sources-panel []
  [rc/h-box :src (at) 
   :justify :around
   :children [[:span "apis list"]
              [:span "apis form"]]])

(defmethod routes/panels :sources-panel [] [sources-panel])