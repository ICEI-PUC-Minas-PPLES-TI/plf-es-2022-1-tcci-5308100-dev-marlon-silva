(ns manager.handlers
  (:require [manager.utils :as u]))

(defn load-resource-list-success
  [db [_ response]]
  (assoc db :resource-list (:body response {})))

(defn load-resource-list-failure
  [db [_ error]]
  (assoc db :result (-> error
                        (select-keys [:status-text :response])
                        (assoc :type :error))))

(defn load-resource-success
  [db [_ response resource-name]]
  (assoc db :resource
         {:old-name resource-name
          :name resource-name
          :data (u/types->set (:body response {}))}))

(defn load-resource-failure
  [db [_ error]]
  (assoc db :result (-> error
                        (select-keys [:status-text :response])
                        (assoc :type :error))))

(defn save-resource-success
  [db [_ response]]
  (assoc db :result (assoc (:body response) :type :success)))

(defn save-resource-failure
  [db [_ error]]
  (assoc db :result (-> error
                        (select-keys [:status-text :response])
                        (assoc :type :error))))

(defn delete-resource-success
  [db [_ response]]
  (assoc db :result (assoc (:body response) :type :success)))

(defn delete-resource-failure
  [db [_ error]]
  (assoc db :result (-> error
                        (select-keys [:status-text :response])
                        (assoc :type :error))))

(defn load-names-success
  [db [_ {:keys [body] :or {body {}}}]]
  (assoc db :names {:types       (map first (get-in body [:graphql :objects]))
                    :interfaces  (map first (get-in body [:graphql :interfaces]))
                    :inputs      (map first (get-in body [:graphql :input-objects]))
                    :enums       (map first (get-in body [:graphql :enums]))
                    :unions      (map first (get-in body [:graphql :unions]))
                    :mutations   (map first (get-in body [:graphql :mutations]))
                    :queries     (map first (get-in body [:graphql :queries]))
                    :sources     (map first (get body :sources))}))

(defn load-names-failure
  [db [_ error]]
  (assoc db :result (-> error
                        (select-keys [:status-text :response])
                        (assoc :type :error))))

(defn new-resource
  [db _]
  (assoc db :resource {:old-name nil}))

(defn new-resource-property
  [db [_ kind]]
  (let [path [:resource :data kind]
        kind-name (name kind)]
    (update-in db path assoc
               (keyword (str (subs kind-name 0 (dec (count kind-name)))
                             (inc (count (get-in db path)))))
               {})))

(defn get-resource
  [db _]
  (:resource db))

(defn update-resource
  [db [_ path function & args]]
  (update-in db (vec (cons :resource path)) (partial apply function) args))
