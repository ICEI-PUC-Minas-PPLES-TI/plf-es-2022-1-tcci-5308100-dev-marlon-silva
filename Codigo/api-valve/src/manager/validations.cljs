(ns manager.validations
  (:require [clojure.string :as string]
            [schema.core :as schema :refer [optional-key required-key conditional]]))

(defn- non-blank [value]
  (conditional (comp not string/blank?) value))

(defn- non-empty [value]
  (conditional not-empty value))

(defn- valid-type [value]
  (conditional #(not-empty (disj % "non-null" "list")) value))

(defn resource [required? data]
  (non-empty
   {(required-key :path) [schema/Keyword]
    (optional-key :old-name) (schema/maybe schema/Str)
    (required-key :name) (non-blank schema/Str)
    (required-key :data) (if required? (non-empty data) data)}))

(schema/defschema Object
  (resource true
            {(optional-key :description) schema/Str
             (optional-key :implements) [schema/Str]
             (required-key :fields)
             (non-empty {schema/Keyword {(optional-key :description) schema/Str
                                         (required-key :type) (valid-type #{schema/Str})
                                         (optional-key :source) schema/Str
                                         (optional-key :response-path) schema/Str
                                         (optional-key :isDeprecated) schema/Bool
                                         (optional-key :deprecated) schema/Str}})}))

(schema/defschema InputObject
  (resource true
            {(optional-key :description) schema/Str
             (required-key :fields)
             (non-empty {schema/Keyword {(optional-key :description) schema/Str
                                         (required-key :type) (valid-type #{schema/Str})
                                         (optional-key :default-value) schema/Str
                                         (optional-key :isDeprecated) schema/Bool
                                         (optional-key :deprecated) schema/Str}})}))

(schema/defschema Interface
  (resource true
            {(optional-key :description) schema/Str
             (required-key :fields)
             (non-empty {schema/Keyword {(optional-key :description) schema/Str
                                         (required-key :type) (valid-type #{schema/Str})
                                         (optional-key :isDeprecated) schema/Bool
                                         (optional-key :deprecated) schema/Str}})}))

(schema/defschema Union
  (resource true
            {(optional-key :description) schema/Str
             (required-key :members) (non-empty #{schema/Str})}))

(schema/defschema Enum
  (resource true
            {(optional-key :description) schema/Str
             (required-key :values)
             (non-empty [{(required-key :enum-value) (non-blank schema/Str)
                          (optional-key :description) schema/Str
                          (optional-key :isDeprecated) schema/Bool
                          (optional-key :deprecated) schema/Str}])}))

(schema/defschema Source
  (resource true
            {(optional-key :description) schema/Str
             (required-key :method) (non-blank schema/Str)
             (required-key :uri) (non-blank schema/Str)}))

(schema/defschema Query
  (resource true
            {(optional-key :description) schema/Str
             (required-key :type) (valid-type #{schema/Str})
             (required-key :resolve) schema/Str
             (optional-key :args)
             {schema/Keyword {(required-key :type) (valid-type #{schema/Str})}}}))

(schema/defschema Mutation
  (resource true
            {(optional-key :description) schema/Str
             (required-key :type) (valid-type #{schema/Str})
             (required-key :resolve) schema/Str
             (required-key :args)
             (non-empty {schema/Keyword {(required-key :type) (valid-type #{schema/Str})}})}))

(schema/defschema Config
  (resource false
            {(optional-key :name) schema/Str
             (optional-key :description) schema/Str
             (optional-key :api-path) schema/Str
             (optional-key :ide-path) schema/Str
             (optional-key :env) schema/Str
             (optional-key :host) schema/Str
             (optional-key :port) schema/Str
             (optional-key :cors) schema/Str}))
