(ns clojure-chat.chat
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [clojure.browser.repl :as repl]
            [cljs-http.client :as http]
            [enfocus.core :as ef]
            [enfocus.events :as ev]
            [cljs.core.async :refer [<!]]
            [ajax.formats :refer [raw-response-format]]
            [ajax.core :refer [GET POST]]))

(defn handle-message-sent [response]
  (.log js/console response))

(defn submit-message [evt]
  (.preventDefault evt)
  (POST "/sendmessage"
    { :body (js/FormData. (.querySelector js/document "form"))
      :handler handle-message-sent
      :keywords? true}))

(defn handle-welcome-message []
  (let [username (.getItem js/localStorage "username")]
    (ef/at "#welcome-message" (ef/content (str "Welcome " username)))))

(defn ^:export init []
  (repl/connect "http://localhost:9000/repl")
  (go
    (let [response (<! (http/get "/messages"))
      body (:body response)]
      (handle-welcome-message)
      (ef/at "#messages" (ef/content (str body))
      (ef/at "#submit-message" (ev/listen
                                :click
                                submit-message))))))
