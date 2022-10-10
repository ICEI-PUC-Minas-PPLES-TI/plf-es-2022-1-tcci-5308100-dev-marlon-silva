(ns manager.utils
  (:require [clojure.walk :as w]
            [schema.core :refer [check]]
            [manager.validations :as v]
            [clojure.string :as s]))

(defn- format-type [type]
  (let [type (if (vector? type) type [type])]
    (reduce #(list %2 %1) (keyword (last type)) (mapv symbol (reverse (butlast type))))))

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

(defn active-panel? [active-panel panel]
  (when (s/includes? (name active-panel) (name panel)) :active))

(defn panel->vector [panel]
  (mapv keyword (s/split (name panel) #"_")))

(defn filter-characteres [t]
  (->> (s/trim t)
       (filter #(re-matches #"(\w|-|\?|>|<|\!)" %))
       (s/join)))

(defn drop-nth [coll n]
  (vec (keep-indexed #(when (not= %1 n) %2) coll)))

(defn- maybe-format-resource [m]
  (cond-> m
    ((comp #(or (string? %) (vector? %)) :type) m) (update :type #(-> % vector flatten set))
    ((comp vector? :cors) m) (update :cors (partial s/join ", "))
    ((comp string? :method) m) (update :method s/upper-case)))

(defn wire->internal [m]
  (w/postwalk #(if (map? %) (maybe-format-resource %) %) m))

(defn- sort-types-comparator [t1 t2]
  (let [order {"non-null" 1 "list" 2}
        t1-weight (get order t1 3)
        t2-weight (get order t2 3)]
    (compare t1-weight t2-weight)))

(defn- maybe-prepare-json [m]
  (cond-> m
    ((comp set? :type) m) (update :type #(->> (vec %) (sort sort-types-comparator)))
    ((comp empty? :implements) m) (dissoc :implements)
    ((comp some? :isDeprecated) m) (dissoc :isDeprecated)
    ((comp s/blank? :cors) m) (dissoc :cors)
    ((comp not s/blank? :cors) m) (update :cors #(map s/trim (s/split % #",")))
    ((comp string? :method) m) (update :method s/lower-case)))

(defn internal->wire [m]
  (w/postwalk #(if (map? %) (maybe-prepare-json %) %) m))

(defn valid-resource? [resource kind]
  (nil? (check
         (case kind
           :objects v/Object
           :input-objects v/InputObject
           :interfaces v/Interface
           :unions v/Union
           :enums v/Enum
           :queries v/Query
           :mutations v/Mutation
           :sources v/Source
           v/Config)
         resource)))
