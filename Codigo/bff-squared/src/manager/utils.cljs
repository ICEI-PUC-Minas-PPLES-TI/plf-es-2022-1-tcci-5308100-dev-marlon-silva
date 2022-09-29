(ns manager.utils
  (:require [clojure.walk :as w]
            [clojure.string :as s]))

(defn- format-type [type]
  (let [type (if (vector? type) type [type])]
    (reduce #(list %2 %1) (keyword (last type)) (mapv symbol (butlast type)))))

(defn- maybe-format-values [m]
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

(defn- maybe-format-type [m]
  (if (or (string? (:type m)) (vector? (:type m)))
    (update m :type #(-> % vector flatten set))
    m))

(defn types->set [m]
  (w/postwalk #(if (map? %) (maybe-format-type %) %) m))

(defn active-panel? [active-panel panel]
  (when (s/includes? (name active-panel) (name panel)) :active))

(defn panel->vector [panel]
  (mapv keyword (s/split (name panel) #"_")))
