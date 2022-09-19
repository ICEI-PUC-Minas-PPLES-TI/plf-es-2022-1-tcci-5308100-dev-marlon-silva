(ns manager.navigation
  (:require [re-frame.core :as rf]))

(rf/reg-event-fx
 :redirect
 (fn [_ [_ handler]]
   {:navigate handler}))

(rf/reg-event-db
 :set-active-panel
 (fn [db [_ active-panel]]
   (assoc db :active-panel active-panel)))

(rf/reg-sub
 :get-active-panel
 (fn [db _]
   (:active-panel db)))
