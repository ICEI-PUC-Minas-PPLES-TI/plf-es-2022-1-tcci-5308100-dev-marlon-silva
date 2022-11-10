(ns manager.views.schemas.unions
  (:require [manager.components.form :as form]
            [manager.views.schemas.core :as schemas]))

(defmethod schemas/form :unions []
  [form/scaffold
   [form/header]
   [form/inputs nil
    [form/name-input "Union"]
    [form/text-input :description "Description:" form/root]
    [form/multi-select-input :members "Members:" [:types] form/root]]
   [form/footer]])
