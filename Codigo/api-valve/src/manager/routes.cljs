(ns manager.routes
  (:require [bidi.bidi :as bidi]
            [pushy.core :as pushy]
            [manager.utils :as u]
            [re-frame.core :as rf]))

(defmulti panels (fn [panel] (first (u/panel->vector panel))))
(defmethod panels :default [] [:div "No panel found for this route."])

(def routes
  (atom
   ["/" {""          :home
         "schemas"   {""            :schemas
                      "/types"      :schemas_types
                      "/interfaces" :schemas_interfaces
                      "/inputs"     :schemas_inputs
                      "/enums"      :schemas_enums
                      "/unions"     :schemas_unions}
         "apis"      :apis
         "queries"   :queries
         "mutations" :mutations
         "settings"  :settings}]))

(defn parse
  [url]
  (bidi/match-route @routes url))

(defn url-for
  [& args]
  (apply bidi/path-for (into [@routes] args)))

(defn dispatch
  [route]
  (rf/dispatch [:set-active-panel (:handler route)]))

(defonce history
  (pushy/pushy dispatch parse))

(defn navigate!
  [handler]
  (pushy/set-token! history (url-for handler)))

(defn start!
  []
  (pushy/start! history))

(rf/reg-fx
 :navigate
 (fn [handler]
   (navigate! handler)))
