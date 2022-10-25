(ns manager.storage
  (:require-macros [manager.env :refer [cljs-env]])
  (:require ["express" :as express]
            ["cors" :as cors]
            [cljs.reader :as reader]
            [clojure.pprint :as pp]
            [clojure.walk :as w]
            [manager.utils :as u]))

(def fs (js/require "fs"))

(defonce server (atom nil))
(defonce definition (atom nil))

(def definition-path (cljs-env :definition-path))

(defn- load-callback [err data]
  (if err
    (throw (js/Error. "Error on load definition file."))
    (reset! definition (reader/read-string data))))

(defn- save-callback [err _]
  (when err
    (throw (js/Error. "Error on save definition file."))))

(defn- load-definition []
  (.readFile fs definition-path "utf8" load-callback))

(defn- save-definition! []
  (.writeFile fs definition-path (with-out-str (pp/pprint @definition)) "utf8" save-callback))

(defn assoc-definition
  [current-definition path {:keys [old-name name data]}]
  (let [data (u/->edn data)
        old-name (keyword old-name)
        name (keyword name)
        available-name? (delay (u/available? current-definition name))]
    (cond
      (or (= old-name name) (and (nil? old-name) @available-name?))
      (assoc-in current-definition (conj path name) data)

      @available-name?
      (-> (w/postwalk-replace {old-name name} current-definition)
          (assoc-in (conj path name) data))

      :else (throw (js/Error. "This name already exists.")))))

(defn dissoc-definition
  [current-definition path name]
  (if-not (u/referenced? current-definition name)
    (update-in current-definition path dissoc name)
    (throw (js/Error. "There is a dependency for this resource."))))

(defn- update-definition! [new-definition]
  (reset! definition new-definition)
  (save-definition!))

(defn- write-handler [req res]
  (let [body (js->clj (.-body req) :keywordize-keys true)
        path (mapv keyword (:path body))]
    (try
      (update-definition! (assoc-definition @definition path body))
      (-> res (.status 200) (.json #js{:message "Definition updated (Write)."}))
      (catch js/Error e
        (-> res (.status 400) (.json #js{:message (.-message e)}))))))

(defn- delete-handler [req res]
  (let [body (js->clj (.-body req) :keywordize-keys true)
        path (mapv keyword (:path body))
        name (keyword (:name body))]
    (try
      (update-definition! (dissoc-definition @definition path name))
      (-> res (.status 200) (.json #js{:message "Definition updated (Delete)."}))
      (catch js/Error e
        (-> res (.status 400) (.json #js{:message (.-message e)}))))))

(defn- read-handler [req res]
  (let  [body (js->clj (.-body req) :keywordize-keys true)
         path (mapv keyword (:path body []))]
    (-> res (.status 200) (.json (clj->js (get-in @definition path))))))

(def app
  (doto (express)
    (.use (.json express))
    (.use (cors))
    (.post "/read" read-handler)
    (.post "/write" write-handler)
    (.post "/delete" delete-handler)))

(defn start-server []
  (println "Loading definition...")
  (load-definition)
  (.listen app 8180 #(println "Storage running...")))

(defn start! [] 
  (reset! server (start-server)))

(defn main []
  (start!))
