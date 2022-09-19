(ns manager.views.mutations
  (:require [re-frame.core :as rf]
            [re-com.core :as rc :refer [at]]
            [manager.routes :as routes]))

(defn mutations-panel []
  [rc/h-box :src (at)
   :justify :around
   :children [[:span "mutations list"]
              [:span "mutations form"]]])

(defmethod routes/panels :mutations-panel [] [mutations-panel])