(ns manager.storage
  (:require ["express" :as express]
            [cljs.reader :as reader]
            [clojure.pprint :as pp]
            [clojure.walk :as w]))

(def fs (js/require "fs"))

(defonce server (atom nil))
(defonce definition (atom nil))

(def definition-path "./resources/definition.edn")

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

(defn format-type [type]
  (let [type (if (vector? type) type [type])]
    (reduce #(list %2 %1) (keyword (last type)) (mapv symbol (butlast type)))))

(defn maybe-format-values [m]
  (cond-> m
    ((comp #(or (string? %) (vector? %)) :type) m) (update :type format-type)
    ((comp vector? :implements) m) (update :implements (partial mapv keyword))
    ((comp vector? :members) m) (update :members (partial mapv keyword))
    ((comp string? :env) m) (update :env keyword)
    ((comp string? :method) m) (update :method keyword)
    ((comp string? :resolve) m) (update :resolve keyword)))

(defn ->edn [data]
  (w/postwalk #(if (map? %) (maybe-format-values %) %) data))

(defn available? [m k]
  (->> (tree-seq map? vals m)
       (filter map?)
       (some k)
       (nil?)))

(defn referenced? [m v]
  (->> (tree-seq map? vals m)
       (filter map?)
       (some #(contains? (set (flatten (vals %))) v))))

(defn assoc-definition
  [current-definition path {:keys [old-name name data]}]
  (let [data (->edn data)
        old-name (keyword old-name)
        name (keyword name)
        available-name? (delay (available? current-definition name))]
    (cond
      (or (= old-name name) (and (nil? old-name) @available-name?))
      (assoc-in current-definition (conj path name) data)

      @available-name?
      (-> (w/postwalk-replace {old-name name} current-definition)
          (assoc-in (conj path name) data))

      :else (throw (js/Error. "This name already exists.")))))

(defn dissoc-definition
  [current-definition path name]
  (if-not (referenced? current-definition name)
    (update-in current-definition path dissoc name)
    (throw (js/Error. "This resource is still used by others."))))

(defn- update-definition! [new-definition]
  (reset! definition new-definition)
  (save-definition!))

(defn- write-handler [req res]
  (let [body (js->clj (.-body req) :keywordize-keys true)
        path (mapv keyword (:path body))]
    (try
      (update-definition! (assoc-definition @definition path body))
      (-> res (.status 200) (.json #js{:message "Definition updated."}))
      (catch js/Error e
        (-> res (.status 500) (.json #js{:message (.-message e)}))))))

(defn- delete-handler [req res]
  (let [body (js->clj (.-body req) :keywordize-keys true)
        path (mapv keyword (:path body))
        name (keyword (:name body))]
    (try
      (update-definition! (dissoc-definition @definition path name))
      (-> res (.status 200) (.json #js{:message "Definition updated."}))
      (catch js/Error e
        (-> res (.status 500) (.json #js{:message (.-message e)}))))))

(defn- read-handler [req res]
  (let  [body (js->clj (.-body req) :keywordize-keys true)
         path (mapv keyword (:path body []))]
    (-> res (.status 200) (.json (clj->js (get-in @definition path))))))

(def app
  (doto (express)
    (.use (.json express))
    (.get "/storage" read-handler)
    (.put "/storage" write-handler)
    (.delete "/storage" delete-handler)))

(defn start-server []
  (println "Loading definition...")
  (load-definition)
  (.listen app 8180 #(println "Storage running on port 8180...")))

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
