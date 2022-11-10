(ns api.diplomat
  (:require [clj-http.client :as client]
            [clojure.string :as string]))

(defn- get-route-params [uri]
  (->> (string/split uri #"/")
       (filter #(string/starts-with? % ":"))
       (map (comp keyword #(subs % 1)))))

(defn- replace-uri-params [uri [param value]]
  (string/replace uri (re-pattern (str param)) (str value)))

(defn url+query-params [uri params]
  (let [route-params (get-route-params uri)]
    [(reduce replace-uri-params uri (select-keys params route-params))
     (or (apply dissoc params route-params) {})]))

(defn make-request
  [{:keys [uri method]} {:keys [params headers body]} response-path]
  (let [[url query-params] (url+query-params uri params)]
    (cond-> (client/request {:method method
                             :url url
                             :query-params query-params
                             :headers headers
                             :body body
                             :as :json
                             :throw-exceptions false})
      (not-empty response-path) 
      (get-in response-path))))
