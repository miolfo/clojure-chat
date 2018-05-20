(ns clojure-chat.handler
  (:require [clojure-chat.db :as db]
            [compojure.core :refer :all]
            [compojure.route :as route]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [ring.middleware.anti-forgery :refer :all]
            [ring.middleware.json :as ring-json]
            [ring.util.response :as rr]
            [clj-http.client :as client]
            [clojure.data.json :as json]
            [clojure.java.jdbc :as jdbc]))

(defn get-messages []
  (json/read-str (:body (client/get (slurp "messages-url.txt"))) :key-fn keyword))

(defn parse-message-string []
  (let [messages (get-messages)]
    (clojure.string/join "<br>" (map #(str (get-in messages [% :sender]) ": " (get-in messages [% :message])) (keys messages)))))

(defn send-message [request]
  (client/post (slurp "messages-url.txt") {:form-params (:multipart-params request) :content-type :json}))

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

(defn init-chat []
  (db/init-db))
