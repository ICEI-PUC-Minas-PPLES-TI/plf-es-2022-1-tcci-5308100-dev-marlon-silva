(ns manager.controller
  (:require [re-frame.core :as rf]
            [day8.re-frame.http-fx]
            [manager.handlers :as h]
            [ajax.core :as ajax]))

(defn load-resource-list
  [{:keys [db]} [_ resource-path]]
  {:db         (dissoc db :result)
   :http-xhrio {:method          :post
                :uri             "http://localhost:8180/read"
                :params          {:path resource-path}
                :format          (ajax/json-request-format)
                :response-format (ajax/json-response-format {:keywords? true})
                :on-success      [:load-resource-list-success]
                :on-failure      [:load-resource-list-failure]}})

(defn load-resource
  [{:keys [db]} [_ resource-path resource-name]]
  {:db         (dissoc db :result)
   :http-xhrio {:method          :post
                :uri             "http://localhost:8180/read"
                :params          {:path (conj resource-path resource-name)}
                :format          (ajax/json-request-format)
                :response-format (ajax/json-response-format {:keywords? true})
                :on-success      [:load-resource-success resource-name]
                :on-failure      [:load-resource-failure]}})

(defn save-resource
  [{:keys [db]} [_ resource-path]]
  {:db         (dissoc db :result)
   :http-xhrio {:method          :post
                :uri             "http://localhost:8180/write"
                :params          (merge {:path resource-path} (:resource db))
                :format          (ajax/json-request-format)
                :response-format (ajax/json-response-format {:keywords? true})
                :on-success      [:save-resource-success]
                :on-failure      [:save-resource-failure]}})

(defn delete-resource
  [{:keys [db]} [_ resource-path]]
  {:db         (dissoc db :result)
   :http-xhrio {:method          :post
                :uri             "http://localhost:8180/delete"
                :params          {:path resource-path :name (get-in db [:resource :old-name])}
                :format          (ajax/json-request-format)
                :response-format (ajax/json-response-format {:keywords? true})
                :on-success      [:delete-resource-success]
                :on-failure      [:delete-resource-failure]}})

(defn load-names
  [{:keys [db]} _]
  {:db         (dissoc db :result)
   :http-xhrio {:method          :post
                :uri             "http://localhost:8180/read"
                :response-format (ajax/json-response-format {:keywords? true})
                :on-success      [:load-names-success]
                :on-failure      [:load-names-failure]}})


;; Load resource list
(rf/reg-event-fx :load-resource-list load-resource-list)
(rf/reg-event-db :load-resource-list-success h/load-resource-list-success)
(rf/reg-event-db :load-resource-list-failure h/load-resource-list-failure)
;; Load resource by name
(rf/reg-event-fx :load-resource load-resource)
(rf/reg-event-db :load-resource-success h/load-resource-success)
(rf/reg-event-db :load-resource-failure h/load-resource-failure)
;; Create/Update resource
(rf/reg-event-fx :save-resource save-resource)
(rf/reg-event-db :save-resource-success h/save-resource-success)
(rf/reg-event-db :save-resource-failure h/save-resource-failure)
;; Delete resource
(rf/reg-event-fx :delete-resource delete-resource)
(rf/reg-event-db :delete-resource-success h/delete-resource-success)
(rf/reg-event-db :delete-resource-failure h/delete-resource-failure)
;; Load names
(rf/reg-event-fx :load-names load-names)
(rf/reg-event-db :load-names-success h/load-names-success)
(rf/reg-event-db :load-names-failure h/load-names-failure)
;; New resource
(rf/reg-event-db :new-resource h/new-resource)
;; New resource property
(rf/reg-event-db :new-resource-property h/new-resource-property)
;; Set resource value
(rf/reg-event-db :update-resource h/update-resource)
;; Get resource values
(rf/reg-sub :get-resource h/get-resource)
