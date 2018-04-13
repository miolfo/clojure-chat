(ns clojure-chat.handler
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [ring.middleware.anti-forgery :refer :all]
            [ring.middleware.json :as ring-json]
            [ring.util.response :as rr]))

(defn get-messages [] 
  [{:sender "Hessu Hopo" :message "Hello world"}
  {:sender "Mikki Hiiri" :message "No morjens"}])

(defn parse-message-string [] 
  (clojure.string/join "<br>" (map #(str (:sender %) ": " (:message %)) (get-messages))))

(defn send-message []
  (str "Message Sent!"))

(defroutes app-routes
  (GET "/" [] "Hello World")
  (GET "/messages" []
    (rr/response (parse-message-string)))
  (POST "/sendmessage" request (send-message))
  (route/not-found "Not Found"))

(def app
  (-> app-routes
      (ring-json/wrap-json-response)
      (wrap-defaults (assoc-in site-defaults [:security :anti-forgery] false))))