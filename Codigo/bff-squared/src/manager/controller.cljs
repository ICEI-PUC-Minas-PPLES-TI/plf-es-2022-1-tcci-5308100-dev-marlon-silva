(ns manager.controller
  (:require [re-frame.core :as rf] 
            [day8.re-frame.http-fx]
            [manager.handlers :as h]
            [manager.utils :as u]
            [ajax.core :as ajax]))

(defn load-all-resources
  [{:keys [db]} _]
  {:db         (dissoc db :result)
   :http-xhrio {:method          :post
                :uri             "http://localhost:8180/read"
                :params          {}
                :format          (ajax/json-request-format)
                :response-format (ajax/json-response-format {:keywords? true})
                :on-success      [:load-all-resources-success]
                :on-failure      [:load-all-resources-failure]}})

(defn save-resource
  [{:keys [db]} _]
  {:db         (dissoc db :result)
   :http-xhrio {:method          :post
                :uri             "http://localhost:8180/write"
                :params          (u/internal->wire (:resource db))
                :format          (ajax/json-request-format)
                :response-format (ajax/json-response-format {:keywords? true})
                :on-success      [:save-resource-success]
                :on-failure      [:save-resource-failure]}})

(defn delete-resource
  [{{resource :resource :as db} :db} _]
  {:db         (dissoc db :result)
   :http-xhrio {:method          :post
                :uri             "http://localhost:8180/delete"
                :params          {:path (:path resource) :name (:old-name resource)}
                :format          (ajax/json-request-format)
                :response-format (ajax/json-response-format {:keywords? true})
                :on-success      [:delete-resource-success]
                :on-failure      [:delete-resource-failure]}})


;; Load all-resources
(rf/reg-event-fx :load-all-resources load-all-resources)
(rf/reg-event-db :load-all-resources-success h/load-all-resources-success)
(rf/reg-event-db :load-all-resources-failure h/load-all-resources-failure)
;; Create/Update resource
(rf/reg-event-fx :save-resource save-resource)
(rf/reg-event-db :save-resource-success h/save-resource-success)
(rf/reg-event-db :save-resource-failure h/save-resource-failure)
;; Delete resource
(rf/reg-event-fx :delete-resource delete-resource)
(rf/reg-event-db :delete-resource-success h/delete-resource-success)
(rf/reg-event-db :delete-resource-failure h/delete-resource-failure)

;; Select resource
(rf/reg-event-db :select-resource h/select-resource)
;; Select config
(rf/reg-event-db :select-config h/select-config)


;; New resource
(rf/reg-event-db :new-resource h/new-resource)
;; Set resource value
(rf/reg-event-db :update-resource h/update-resource)
;; New resource property
(rf/reg-event-db :new-resource-property h/new-resource-property)
;; Delete resource property
(rf/reg-event-db :delete-resource-property h/delete-resource-property)

;; Reload
(rf/reg-event-fx :reload-resources h/reload-resources)

;; Get resource list
(rf/reg-sub :get-resource-list h/get-resource-list)
;; Get resource values
(rf/reg-sub :get-resource h/get-resource)
;; Get names
(rf/reg-sub :get-names h/get-names)

;; Get result
(rf/reg-sub :get-result h/get-result)
;; Delete result
(rf/reg-event-db :delete-result h/delete-result)

;; Check resource
(rf/reg-sub :check-resource h/check-resource)
