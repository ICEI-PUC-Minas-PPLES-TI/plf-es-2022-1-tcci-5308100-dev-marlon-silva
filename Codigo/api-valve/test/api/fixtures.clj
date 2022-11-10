(ns api.fixtures)

(def definition-map
  '{:graphql
    {:objects
     {:Advice
      {:description "Advice Slip"
       :fields
       {:id {:type (non-null :ID)}
        :advice {:type (non-null :String)}}}}
     :input-objects
     {:adviceParams
      {:fields
       {:adviceId {:type (non-null :ID)}}}}
     :queries
     {:adviceById
      {:type :Advice
       :description "Get an advice slip by ID"
       :resolve :GetAdviceSlipById
       :args
       {:params {:type :adviceParams}}}
      :randomAdvice
      {:type :Advice
       :description "Get an random advice slip"
       :resolve :GetRandomAdvice}}}
    :config
    {:name "api-valve",
     :description "Uma ferramenta low code para construção de BFFs"},
    :sources
    {:GetAdviceSlipById
     {:uri "https://api.adviceslip.com/advice/:adviceId",
      :method :get}}})
