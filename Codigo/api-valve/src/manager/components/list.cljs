(ns manager.components.list
  (:require [re-frame.core :as rf]
            [manager.utils :as u]
            [re-com.core :as rc :refer [at]]))

(defn empty-list-alert []
  [:div.alert.alert-info
   {:role "alert"
    :style {:margin 0}}
   [:span [:strong "No items here."] " Create a new one."]])

(defn- navbar-tab [active-panel panel label]
  [:li
   {:class (u/active-panel? active-panel panel)
    :on-click #(rf/dispatch [:redirect (keyword (str "schemas_" (name panel)))])}
   [:a label]])

(defn- navbar [active-panel]
  [:ul
   {:class "nav nav-pills nav-justified"
    :style {:padding "0 5em" :min-height "auto"}}
   [navbar-tab active-panel :types "Types"]
   [navbar-tab active-panel :inputs "Inputs"]
   [navbar-tab active-panel :interfaces "Interfaces"]
   [navbar-tab active-panel :unions "Unions"]
   [navbar-tab active-panel :enums "Enums"]])

(defn- list-item [selected-name [name content]]
  [:a.list-group-item
   {:key name
    :class (when (= (keyword selected-name) name) :active)
    :on-click #(rf/dispatch [:select-resource name])}
   [:span.badge [:span.glyphicon.glyphicon-chevron-right {:aria-hidden "true"}]]
   [:h4.list-group-item-heading name]
   [:p.list-group-item-text (get content
                                 :description
                                 [:span
                                  {:style {:font-style :oblique}}
                                  "No description"])]])

(defn single-resource []
  (let [items (rf/subscribe [:get-resource-list])
        selected-item (rf/subscribe [:get-resource])]
    [rc/v-box :src (at)
     :size "auto"
     :max-height "78.6vh"
     :style {:overflow :auto}
     :children [(if (empty? @items)
                  [empty-list-alert]
                  [:div.list-group
                   (map (partial list-item (:old-name @selected-item)) (sort-by first @items))])]]))

(defn multi-resources [active-panel]
  [rc/v-box :src (at)
   :size "auto"
   :max-height "78.6vh"
   :gap "3vh"
   :children [[navbar active-panel]
              [single-resource]]])
