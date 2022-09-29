(ns manager.navigation
  (:require [re-frame.core :as rf]))

(rf/reg-event-fx
 :redirect
 (fn [_ [_ handler]]
   {:navigate handler}))

(rf/reg-event-fx
 :set-active-panel
 (fn [{:keys [db]} [_ active-panel]]
   (let [path (get-in db [:panel->path active-panel])]
     {:db (dissoc (assoc db :active-panel active-panel) :resource)
      :fx [(when path [:dispatch [:load-all-resources path]])]})))

(rf/reg-sub
 :get-active-panel
 (fn [db _]
   (:active-panel db)))
