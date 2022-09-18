(ns manager.views.page
  (:require [re-frame.core :as rf]
            [re-com.core :as rc :refer [at]]
            [clojure.string :as string]
            [manager.routes :as routes]
            [manager.views.settings]
            [manager.views.mutations]
            [manager.views.queries]
            [manager.views.apis]
            [manager.views.schemas]))

(defn global-header []
  [rc/h-box :src (at)
   :style {:padding "0em 1em 1em 1em" :background-color "#f4f4f4"}
   :children [[:h1 "BFF Squared" [:small "ManagerUI"]]]])

(defn- active-panel? [active-panel panel]
  (when (string/includes? (name active-panel) (name panel)) "active"))

(defn- navbar-tab [active-panel panel label]
  [:li {:class (active-panel? active-panel panel)
        :on-click #(rf/dispatch [:redirect panel])}
   [:a label]])

(defn navbar [active-panel]
  [:ul {:class "nav nav-tabs nav-justified"
        :style {:margin-bottom "2em" :background-color "#f4f4f4"}}
   [navbar-tab active-panel :schemas "Schemas"]
   [navbar-tab active-panel :sources "APIs"]
   [navbar-tab active-panel :queries "Queries"]
   [navbar-tab active-panel :mutations "Mutations"]
   [navbar-tab active-panel :settings "Settings"]])

(defmethod routes/panels :home-panel []
  (rf/dispatch [:redirect :settings]))

(defn main-panel []
  (let [active-panel (rf/subscribe [:get-active-panel])]
    (when @active-panel
      [rc/v-box :src (at)
       :height "100%"
       :width "100%"
       :children [[global-header]
                  [navbar @active-panel]
                  [routes/panels @active-panel]]])))
