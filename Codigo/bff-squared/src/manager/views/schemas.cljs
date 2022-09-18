(ns manager.views.schemas
  (:require [re-frame.core :as rf]
            [re-com.core :as rc :refer [at]]
            [manager.routes :as routes]))

(defn schemas-panel []
  [rc/h-box :src (at)
   :justify :around
   :children [[:span "schemas list"]
              [:span "schemas form"]]])

(defmethod routes/panels :schemas-panel [] [schemas-panel])