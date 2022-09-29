(ns manager.navigation
  (:require [re-frame.core :as rf]))

(rf/reg-event-fx
 :redirect
 (fn [_ [_ handler]]
   {:navigate handler}))

(rf/reg-event-fx
 :set-active-panel
 (fn [{:keys [db]} [_ active-panel]]
   {:db (-> db (assoc :active-panel active-panel) (dissoc :resource))
    :fx [[:dispatch [:load-all-resources]]]}))

(rf/reg-sub
 :get-active-panel
 (fn [db _]
   (:active-panel db)))
