(ns clojure-chat.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [clojure.browser.repl :as repl]
            [cljs-http.client :as http]
            [enfocus.core :as ef]
            [cljs.core.async :refer [<!]]))

(defn ^:export init []
  (repl/connect "http://localhost:9000/repl")
  (go 
    (let [response (<! (http/get "/messages"))
      body (:body response)]
      (ef/at "#messages" (ef/content (str body))))))