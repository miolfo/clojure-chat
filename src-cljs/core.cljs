(ns clojure-chat.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [clojure.browser.repl :as repl]
            [cljs-http.client :as http]
            [enfocus.core :as ef]
            [enfocus.events :as ev]            
            [cljs.core.async :refer [<!]]
            [ajax.core :refer [GET POST]]))

(defn handle-message-sent [response]
  (.log js/console response))

(defn submit-message [evt]
  (.preventDefault evt)
  (POST "/sendmessage" 
    {:handler handle-message-sent}))

(defn ^:export init []
  (repl/connect "http://localhost:9000/repl")
  (go 
    (let [response (<! (http/get "/messages"))
      body (:body response)]
      (ef/at "#messages" (ef/content (str body))
      (ef/at "#submit-message" (ev/listen
                                :click 
                                submit-message))))))