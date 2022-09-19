(ns manager.routes
  (:require [bidi.bidi :as bidi]
            [pushy.core :as pushy]
            [re-frame.core :as rf]))

(defmulti panels identity)
(defmethod panels :default [] [:div "No panel found for this route."])

(def routes
  (atom
   ["/" {""          :home
         "schemas"   {""            :schemas ;; redirect to types
                      "/types"      :schemas_types
                      "/interfaces" :schemas_interfaces
                      "/inputs"     :schemas_inputs
                      "/enums"      :schemas_enums
                      "/unions"     :schemas_unions}
         "apis"      :sources
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
  (let [panel (keyword (str (name (:handler route)) "-panel"))]
    (rf/dispatch [:set-active-panel panel])))

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
