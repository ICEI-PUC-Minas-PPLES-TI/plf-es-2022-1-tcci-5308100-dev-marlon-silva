(ns manager.core
  (:require [reagent.dom :as rdom]
            [re-frame.core :as rf] 
            [manager.navigation]
            [manager.controller]
            [manager.routes :as routes]
            [manager.views :as views]))

(rf/reg-event-db :initialize-db (constantly {}))

(def debug?
  ^boolean goog.DEBUG)

(defn dev-setup []
  (when debug?
    (println "dev mode")))

(defn ^:dev/after-load mount-root []
  (rf/clear-subscription-cache!)
  (let [root-el (.getElementById js/document "app")]
    (rdom/unmount-component-at-node root-el)
    (rdom/render [views/main-panel] root-el)))

(defn init []
  (routes/start!)
  (rf/dispatch-sync [:initialize-db])
  (dev-setup)
  (mount-root))
