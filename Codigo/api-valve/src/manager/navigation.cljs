(ns manager.navigation
  (:require [re-frame.core :as rf]
            [day8.re-frame.async-flow-fx]))

(rf/reg-event-fx
 :redirect
 (fn [_ [_ handler]]
   {:navigate handler}))

(rf/reg-event-fx
 :set-active-panel
 (fn [{:keys [db]} [_ active-panel]]
   (merge
    {:db (-> db (assoc :active-panel active-panel) (dissoc :resource))}
    (cond
      (= active-panel :settings) {:async-flow {:first-dispatch [:load-all-resources]
                                               :rules [{:when :seen?
                                                        :events :load-all-resources-success
                                                        :dispatch [:select-config]
                                                        :halt? true}
                                                       {:when :seen?
                                                        :events :load-all-resources-failure
                                                        :dispatch []
                                                        :halt? true}]}}
      (or (= active-panel :home) (= active-panel :schemas)) nil
      :else {:fx [[:dispatch [:load-all-resources]]]}))))

(rf/reg-sub
 :get-active-panel
 (fn [db _]
   (:active-panel db)))
