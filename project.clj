(defproject clojure-chat "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :min-lein-version "2.0.0"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [compojure "1.5.1"]
                 [ring/ring-defaults "0.2.1"]
                 [ring/ring-json "0.4.0"]
                 [org.clojure/clojurescript "1.10.238"]
                 [cljs-http "0.1.45"]
                 [org.clojure/core.async "0.4.474"]
                 [com.cemerick/piggieback "0.2.2"]
                 [enfocus "2.1.1"]
                 [cljs-ajax "0.7.3"]
                 [clj-http "3.9.0"]
                 [org.clojure/data.json "0.2.6"]
                 [org.clojure/java.jdbc "0.7.6"]
                 [org.xerial/sqlite-jdbc "3.21.0"]]
  :plugins [
            [lein-ring "0.9.7"]
            [lein-cljsbuild "1.1.7"]]
  :ring {:handler clojure-chat.handler/app}
  :profiles
  {:dev {:dependencies [[javax.servlet/servlet-api "2.5"]
                        [ring/ring-mock "0.3.0"]]}}
  :cljsbuild {
    :builds [{
      :source-paths ["src-cljs"]
      :compiler {
        :output-to "resources/public/main.js"
        :optimizations :whitespace
        :pretty-print true
      }
    }]
  })

