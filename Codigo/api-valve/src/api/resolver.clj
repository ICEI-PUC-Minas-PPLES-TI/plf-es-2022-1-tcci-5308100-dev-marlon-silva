(ns api.resolver
  (:require [com.walmartlabs.lacinia.resolve :as r]))

(defn get-source!
  [map key]
  (if (and (get-in map [key :uri]) (get-in map [key :method]))
    (get map key)
    (throw (ex-info
            (str "Source '" (name key) "' not defined or incomplete.")
            {:source key
             :uri    (get-in map [key :uri])
             :method (get-in map [key :method])}))))

(defn use-path!
  [source path]
  (if (and (vector? path) (seq path))
    path
    (throw (ex-info
            (str "The source '" (name source) "' has not a valid response-path.")
            {:source source
             :path path}))))

(defn new-resolver
  [sourcefn source]
  (fn [_ args _]
    (sourcefn source args nil)))

(defn new-async-resolver
  [sourcefn source response-path]
  (fn [_ args _]
    (let [result (r/resolve-promise)]
      (-> #(try
             (r/deliver! result (sourcefn source args response-path))
             (catch Throwable t
               (r/deliver! result nil
                           {:message (str "Exception: " (.getMessage t))})))
          (Thread.)
          (.start))
      result)))

(defn definition->resolvers
  [{sources                     :sources
    {:keys [queries mutations]} :graphql} sourcefn]
  (->> (merge queries mutations)
       (map (comp :resolve second))
       (reduce #(assoc %1 %2 (new-resolver sourcefn (get-source! sources %2)))
               {:get-in #(new-async-resolver sourcefn (get-source! sources %1) (use-path! %1 %2))})))
