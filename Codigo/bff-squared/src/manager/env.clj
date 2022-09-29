(ns manager.env
  (:require [environ.core :refer [env]]))

(defmacro cljs-env [k] (env k))
