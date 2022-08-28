(ns aux.fixtures-test)

(def definition-map
  '{:graphql
    {:interfaces
     {:Human {:description "Person", :fields {:name {:type :String}}}
      :Employee {:fields {:salary {:type :Float}}}}
     :objects
     {:Project
      {:fields
       {:name {:type (non-null :String)}
        :description {:type :String}}}
      :Designer
      {:fields
       {:id {:type (non-null :ID)},
        :name {:type :String}
        :salary {:type :Float}
        :projects {:type (list :Project)}
        :team {:type (list (non-null :Human))}},
       :description "A person who may have contributed to design.",
       :implements [:Employee :Human]}},
     :queries
     {:hello
      {:type :String,
       :description "Say helloooou",
       :resolve :hello-resolve}}},
    :config
    {:name "bff-squared",
     :description "Um framework para construção de BFFs"},
    :sources
    {:github {:uri "https://github.com",
              :method :get
              :into-response ["data"]}}})
