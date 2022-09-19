(ns manager.views.queries
  (:require [re-frame.core :as rf]
            [re-com.core :as rc :refer [at]]
            [manager.routes :as routes]))

(defn queries-panel []
  [rc/h-box :src (at)
   :justify :around
   :children [[:span "queries list"]
              [:span "queries form"]]])

(defmethod routes/panels :queries-panel [] [queries-panel])