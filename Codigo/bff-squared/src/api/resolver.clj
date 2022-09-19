(ns api.resolver)

(defn get-source!
  [map key]
  (if (and (get-in map [key :uri]) (get-in map [key :method]))
    (get map key)
    (throw (ex-info
            (str "Source '" (name key) "' not defined or incomplete.")
            {:source key
             :uri    (get-in map [key :uri])
             :method (get-in map [key :method])}))))

(defn new-resolver
  [sourcefn source]
  (fn [_ args _]
    (sourcefn source args)))

(defn definition->resolvers
  [{sources                     :sources
    {:keys [queries mutations]} :graphql} sourcefn]
  (->> (merge queries mutations)
       (map (comp :resolve second))
       (reduce #(assoc %1 %2 (new-resolver sourcefn (get-source! sources %2))) {})))
