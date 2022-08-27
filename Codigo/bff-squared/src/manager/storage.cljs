(ns manager.storage
  (:require ["express" :as express]
            [cljs.reader :as reader]
            [clojure.pprint :as pp]
            [clojure.walk :as w]))

(def fs (js/require "fs"))

(defonce server (atom nil))
(defonce definition (atom nil))

(def definition-path "./resources/definition.edn")

(defn load-callback [err data]
  (if err
    (throw (js/Error. "Error on load definition file."))
    (reset! definition (reader/read-string data))))

(defn save-callback [err _]
  (when err
    (throw (js/Error. "Error on save definition file."))))

(defn load-definition []
  (.readFile fs definition-path "utf8" load-callback))

(defn save-definition []
  (.writeFile fs definition-path (with-out-str (pp/pprint @definition)) "utf8" save-callback))

(def keyword-values #{:env :method :resolve})

(defn keywordize-vals [m]
  (w/walk (fn [[k v]]
            [k (cond
                 (= k :implements) (mapv keyword v)
                 (contains? keyword-values k) (keyword v)
                 :else v)]) identity m))

(defn vector->compound-functions [v]
  (let [v (if-not (vector? v) [v] v)]
    (reduce #(list %2 %1) (keyword (last v)) (mapv symbol (butlast v)))))

(defn format-types [m]
  (w/walk (fn [[k v]]
            [k (if (= k :type) (vector->compound-functions v) v)]) identity m))

(defn ->edn [data]
  (-> data keywordize-vals format-types))

(defn available-name? [m k]
  (->> (tree-seq map? vals m)
       (filter map?)
       (some k)
       (nil?)))

(defn used-resource? [m v]
  (->> (tree-seq map? vals m)
       (filter map?)
       (some #(contains? (set (vals %)) v))))

(defn assoc-definition
  [current-definition path {:keys [old-name name data]}]
  (let [data (->edn data)
        old-name (keyword old-name)
        name (keyword name)]
    (if (or (= old-name name)
            (available-name? current-definition name))
      (if (or (nil? old-name)
              (= old-name name))
        (assoc-in current-definition (conj path name) data)
        (-> (w/postwalk-replace {old-name name} current-definition)
            (assoc-in (conj path name) data)))
      (throw (js/Error. "This name already exists.")))))

(defn dissoc-definition
  [current-definition path name]
  (if-not (used-resource? current-definition name)
    (update-in current-definition path dissoc name)
    (throw (js/Error. "This resource is still used by others."))))

(defn write-handler [req res]
  (let [body (js->clj (.-body req) :keywordize-keys true)
        path (mapv keyword (:path body))]
    (try
      (reset! definition (assoc-definition @definition path body))
      (save-definition)
      (-> res (.status 200) (.json (clj->js {:message "Definition updated."})))
      (catch js/Error e
        (-> res (.status 500) (.json (clj->js {:message (.-message e)})))))))

(defn delete-handler [req res]
  (let [body (js->clj (.-body req) :keywordize-keys true)
        path (mapv keyword (:path body))]
    (try
      (reset! definition (dissoc-definition @definition path (keyword (:name body))))
      (save-definition)
      (-> res (.status 200) (.json (clj->js {:message "Definition updated."})))
      (catch js/Error e
        (-> res (.status 500) (.json (clj->js {:message (.-message e)})))))))

(defn read-handler [req res]
  (let  [body (js->clj (.-body req) :keywordize-keys true)
         path (mapv keyword (:path body []))]
    (.send res (clj->js (get-in @definition path)))))

(defn start-server []
  (println "Loading definition...")
  (load-definition)
  (let [app (express)]
    (.use app (.json express))
    (.get app "/storage" read-handler)
    (.put app "/storage" write-handler)
    (.delete app "/storage" delete-handler)
    (.listen app 8180 #(println "Storage running on port 8180..."))))

(defn start! []
  ;; called by main and after reloading code
  (reset! server (start-server)))

(defn stop! []
  ;; called before reloading code
  (.close @server)
  (reset! server nil))

(defn main []
  ;; executed once, on startup, can do one time setup here
  (start!))
