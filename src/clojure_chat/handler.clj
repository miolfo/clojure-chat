(ns clojure-chat.handler
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [ring.middleware.anti-forgery :refer :all]
            [ring.middleware.json :as ring-json]
            [ring.util.response :as rr]))

(defn get-messages []
  [{:sender "Hessu Hopo" :message "Hello world"}
  {:sender "Mikki Hiiri" :message "No morjens vaa"}])

(defn parse-message-string []
  (clojure.string/join "<br>" (map #(str (:sender %) ": " (:message %)) (get-messages))))

(defn send-message [request]
  (str (:multipart-params request)))

(defroutes api-routes
  (GET "/messages" []
    (rr/response (parse-message-string)))
  (POST "/sendmessage" request (send-message request))
  (route/not-found "404 Not Found"))

(defroutes html-routes
  (GET "/" []
    (rr/resource-response "login.html" {:root "public"}))
  (GET "/chat" []
    (rr/resource-response "chat.html" {:root "public"})))

(def app
  (routes (-> html-routes)
          (-> api-routes
            (ring-json/wrap-json-response)
            (wrap-defaults (assoc-in site-defaults [:security :anti-forgery] false)))))
