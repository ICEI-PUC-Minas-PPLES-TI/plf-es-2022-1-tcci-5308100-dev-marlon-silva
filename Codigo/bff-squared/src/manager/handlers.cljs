(ns manager.handlers
  (:require [manager.utils :as u]))

(defn load-all-resources-success
  [db [_ response]]
  (let [resource-path (get-in db [:panel->path (:active-panel db)])]
    (-> (assoc db :resource-list (get-in response resource-path {}))
        (update :names merge {:types       (map (comp name first) (get-in response [:graphql :objects]))
                              :interfaces  (map (comp name first) (get-in response [:graphql :interfaces]))
                              :inputs      (map (comp name first) (get-in response [:graphql :input-objects]))
                              :enums       (map (comp name first) (get-in response [:graphql :enums]))
                              :unions      (map (comp name first) (get-in response [:graphql :unions]))
                              :mutations   (map (comp name first) (get-in response [:graphql :mutations]))
                              :queries     (map (comp name first) (get-in response [:graphql :queries]))
                              :sources     (map (comp name first) (get response :sources))}))))

(defn load-all-resources-failure
  [db [_ error]]
  (assoc db :result (-> error
                        (select-keys [:status-text :response])
                        (assoc :type :error))))

(defn save-resource-success
  [db [_ response]]
  (-> (update db :resource assoc :old-name (-> db :resource :name))
      (assoc :result {:response response :type :success})))

(defn save-resource-failure
  [db [_ error]]
  (assoc db :result (-> error
                        (select-keys [:status-text :response])
                        (assoc :type :error))))

(defn delete-resource-success
  [db [_ response]]
  (assoc db
         :result {:response response :type :success}
         :resource {:path (get-in db [:panel->path (:active-panel db)])
                    :old-name nil}))

(defn delete-resource-failure
  [db [_ error]]
  (assoc db :result (-> error
                        (select-keys [:status-text :response])
                        (assoc :type :error))))

(defn reload-resources
  [_ _]
  {:fx [[:dispatch [:load-all-resources]]]})

(defn new-resource
  [db _]
  (assoc db :resource
         {:path (get-in db [:panel->path (:active-panel db)])
          :old-name nil}))

(defn new-resource-property
  [db [_ kind]]
  (let [path [:resource :data kind]
        kind-name (name kind)]
    (update-in db path assoc
               (keyword (str (subs kind-name 0 (dec (count kind-name)))
                             (inc (count (get-in db path)))))
               {})))

(defn delete-resource-property
  [db [_ path name]]
  (update-in db (apply vector :resource path) dissoc name))

(defn get-resource
  [db _]
  (:resource db))

(defn get-resource-list
  [db _]
  (:resource-list db))

(defn get-names
  [db [_ kinds]]
  (select-keys (:names db) kinds))

(defn get-result
  [db _]
  (:result db))

(defn delete-result
  [db _]
  (dissoc db :result))

(defn update-resource
  [db [_ path function & args]]
  (update-in db (vec (cons :resource path)) (partial apply function) args))

(defn select-resource
  [db [_ resource-name]]
  (-> (dissoc db :result)
      (assoc :resource {:path (get-in db [:panel->path (:active-panel db)])
                        :old-name (name resource-name)
                        :name (name resource-name)
                        :data (u/types->set (-> db :resource-list resource-name))})))

(defn check-resource
  [db _]
  (u/valid-resource? (:resource db) (-> db :resource :path last)))