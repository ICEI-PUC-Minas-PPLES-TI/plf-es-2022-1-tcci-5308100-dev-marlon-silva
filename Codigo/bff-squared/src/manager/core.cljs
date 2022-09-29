(ns manager.core
  (:require [reagent.dom :as rdom]
            [re-frame.core :as rf]
            [manager.navigation]
            [manager.controller]
            [manager.routes :as routes]
            [manager.views.page :as views.page]))

(rf/reg-event-db
 :initialize-db
 (constantly
  {:panel->path
   {:schemas_types [:graphql :objects]
    :schemas_inputs [:graphql :input-objects]
    :schemas_interfaces [:graphql :interfaces]
    :schemas_unions [:graphql :unions]
    :schemas_enums [:graphql :enums]
    :apis  [:sources]
    :queries [:graphql :queries]
    :mutations [:graphql :mutations]
    :settings  [:config]}}))

(def debug?
  ^boolean goog.DEBUG)

(defn dev-setup []
  (when debug?
    (println "dev mode")))

(defn ^:dev/after-load mount-root []
  (rf/clear-subscription-cache!)
  (let [root-el (.getElementById js/document "app")]
    (rdom/unmount-component-at-node root-el)
    (rdom/render [views.page/main-panel] root-el)))

(defn init []
  (routes/start!)
  (rf/dispatch-sync [:initialize-db])
  (dev-setup)
  (mount-root))
