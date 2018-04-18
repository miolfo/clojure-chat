(ns clojure-chat.login
    (:require-macros [cljs.core.async.macros :refer [go]])
    (:require [clojure.browser.repl :as repl]
              [cljs-http.client :as http]
              [enfocus.core :as ef]
              [enfocus.events :as ev]            
              [cljs.core.async :refer [<!]]
              [ajax.formats :refer [raw-response-format]]
              [ajax.core :refer [GET POST]]))

(defn login-clicked [evt]
    (.preventDefault evt)
    (.setItem js/localStorage "username" (ef/from "#username" (ef/get-prop :value)))
    (set! (.-location js/window) "/chat"))

(defn ^export init []
    ;for using localstorage use (.log js/console js/localStorage)
    (ef/at "#submit-login" (ev/listen
                            :click
                            login-clicked)))