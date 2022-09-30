(ns manager.utils
  (:require [clojure.walk :as w]
            [schema.core :as schema :include-macros true]
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

(defn filter-characteres [t]
  (->> (s/trim t)
       (filter #(re-matches #"(\w|-|\?|>|<|\!)" %))
       (s/join)))

(defn- sort-types-comparator [t1 t2]
  (let [order {"non-null" 1 "list" 2}
        t1-weight (get order t1 3)
        t2-weight (get order t2 3)]
    (compare t1-weight t2-weight)))

(defn- maybe-prepare-json [m]
  (cond-> m
    ((comp set? :type) m) (update :type #(->> (vec %) (sort sort-types-comparator)))
    ((comp empty? :implements) m) (dissoc :implements)
    ((comp some? :isDeprecated) m) (dissoc :isDeprecated)))

(defn prepare-json [m]
  (w/postwalk #(if (map? %) (maybe-prepare-json %) %) m))

(defn- not-empty-map [value]
  (schema/conditional not-empty value))

(defn- not-empty-type [value]
  (schema/conditional #(not-empty (disj % "non-null" "list")) value))

(schema/defschema TypeSchema
  {(schema/required-key :path) [schema/Keyword]
   (schema/required-key :old-name) schema/Str
   (schema/required-key :name) schema/Str
   (schema/required-key :data)
   {(schema/optional-key :description) schema/Str
    (schema/optional-key :implements) [schema/Str]
    (schema/required-key :fields)
    (not-empty-map {schema/Keyword {(schema/optional-key :description) schema/Str
                                    (schema/required-key :type) (not-empty-type #{schema/Str})
                                    (schema/optional-key :isDeprecated) schema/Bool
                                    (schema/optional-key :deprecated) schema/Str}})}})

(defn valid-resource? [resource kind]
  (nil?
   (case kind
     :objects (schema/check TypeSchema resource)
     true)))
