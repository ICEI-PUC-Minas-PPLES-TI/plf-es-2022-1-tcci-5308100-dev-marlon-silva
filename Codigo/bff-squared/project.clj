(defproject bff-squared "0.1.0-SNAPSHOT"
  :description "Um framework para construção de BFFs"
  :dependencies [[org.clojure/clojure "1.11.1"]
                 [org.clojure/clojurescript "1.11.4"]
                 [com.walmartlabs/lacinia-pedestal "1.1"]
                 [com.stuartsierra/component "1.1.0"]
                 [io.aviso/logging "1.0"]
                 [re-frame "1.2.0"]
                 [reagent "1.1.1"]
                 [kibu/pushy "0.3.8"]
                 [bidi "2.1.6"]]

  :plugins [[lein-cljsbuild "1.1.8"]]

  :min-lein-version "2.5.3"

  :source-paths ["src/bff_squared/api" "src/bff_squared/manager"]

  :clean-targets ^{:protect false} ["resources/public/js/compiled" "target"]

  :figwheel {:css-dirs ["resources/public/css"]}

  :repl-options {:nrepl-middleware [cider.piggieback/wrap-cljs-repl]}

  :profiles
  {:dev
   {:dependencies [[binaryage/devtools "1.0.6"]
                   [day8.re-frame/re-frame-10x "1.5.0"]
                   [day8.re-frame/tracing "0.6.2"]
                   [figwheel-sidecar "0.5.20"]
                   [cider/cider-nrepl "0.28.5"]
                   [cider/piggieback "0.5.3"]
                   [re-frisk "1.6.0"]]

    :plugins      [[lein-figwheel "0.5.20"]]}
   :prod {:dependencies [[day8.re-frame/tracing-stubs "0.6.2"]]}}

  :cljsbuild
  {:builds
   [{:id           "dev"
     :source-paths ["src/bff_squared/manager"]
     :figwheel     {:on-jsload "bff-squared.manager.core/mount-root"}
     :compiler     {:main                 bff-squared.manager.core
                    :output-to            "resources/public/js/compiled/app.js"
                    :output-dir           "resources/public/js/compiled/out"
                    :asset-path           "js/compiled/out"
                    :source-map-timestamp true
                    :preloads             [devtools.preload
                                           day8.re-frame-10x.preload
                                           re-frisk.preload]
                    :closure-defines      {"re_frame.trace.trace_enabled_QMARK_" true
                                           "day8.re_frame.tracing.trace_enabled_QMARK_" true}
                    :external-config      {:devtools/config {:features-to-install :all}}}}

    {:id           "min"
     :source-paths ["src/bff_squared/manager"]
     :compiler     {:main            bff-squared.manager.core
                    :output-to       "resources/public/js/compiled/app.js"
                    :optimizations   :advanced
                    :closure-defines {goog.DEBUG false}
                    :pretty-print    false}}]})
