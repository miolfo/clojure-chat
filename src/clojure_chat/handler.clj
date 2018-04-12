(ns clojure-chat.handler
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [ring.middleware.json :as ring-json]
            [ring.util.response :as rr]))

(defn get-messages [] 
  [{:sender "Hessu Hopo" :message "Hello world"}
  {:sender "Mikki Hiiri" :message "No morjens"}])

(defn parse-message-string [] 
  (clojure.string/join "<br>" (map #(str (:sender %) ": " (:message %)) (get-messages))))

(defroutes app-routes
  (GET "/" [] "Hello World")
  (GET "/messages" []
    (rr/response (parse-message-string)))
  (route/not-found "Not Found"))

(def app
  (-> app-routes
      (ring-json/wrap-json-response)
      (wrap-defaults site-defaults)))

