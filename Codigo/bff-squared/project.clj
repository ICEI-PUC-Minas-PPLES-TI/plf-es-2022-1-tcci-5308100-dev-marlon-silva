(defproject bff-squared "0.1.0-SNAPSHOT"
  :description "Um framework para construção de BFFs"
  :dependencies [[org.clojure/clojure "1.11.1"]
                 [com.walmartlabs/lacinia-pedestal "1.1"]
                 [com.stuartsierra/component "1.1.0"]
                 [io.aviso/logging "1.0"]
                 [clj-http "3.12.3"]
                 [cheshire "5.11.0"]
                 [environ "1.2.0"]]
  :plugins [[lein-cloverage "1.2.4"]]
  :source-paths ["src"]
  :main ^:skip-aot api.server
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}
             :dev {:dependencies [[nubank/matcher-combinators "3.5.1"]]}})
