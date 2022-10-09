(ns manager.views.page
  (:require [re-frame.core :as rf]
            [re-com.core :as rc :refer [at]]
            [manager.utils :as u]
            [manager.routes :as routes]
            [manager.views.schemas.core]
            [manager.views.schemas.types]
            [manager.views.schemas.inputs]
            [manager.views.schemas.interfaces]
            [manager.views.schemas.unions]
            [manager.views.schemas.enums]
            [manager.views.apis]
            [manager.views.queries]
            [manager.views.mutations]
            [manager.views.settings]))

(defn global-header []
  [rc/box :src (at)
   :justify :center
   :style {:height "12vh" :padding "0vh 1em 0vh 1em"
           :margin-top "-2vh" :background-color "#f4f4f4"}
   :child [:h2 "BFF Squared" [:small "Manager"]]])

(defn- navbar-tab [active-panel panel label]
  [:li
   {:class (u/active-panel? active-panel panel)
    :on-click #(rf/dispatch [:redirect panel])}
   [:a label]])

(defn navbar [active-panel]
  [:ul
   {:class "nav nav-tabs nav-justified"
    :style {:background-color "#f4f4f4"}}
   [navbar-tab active-panel :schemas "Schemas"]
   [navbar-tab active-panel :apis "APIs"]
   [navbar-tab active-panel :queries "Queries"]
   [navbar-tab active-panel :mutations "Mutations"]
   [navbar-tab active-panel :settings "Settings"]])

(defmethod routes/panels :home []
  (rf/dispatch [:redirect :settings]))

(defn main-panel []
  (let [active-panel (rf/subscribe [:get-active-panel])]
    (if @active-panel
      [rc/v-box :src (at)
       :children [[global-header]
                  [navbar @active-panel]
                  [routes/panels @active-panel]]]
      [:div "No panel found for this route."])))
