(ns clojure-chat.login
    (:require-macros [cljs.core.async.macros :refer [go]])
    (:require [clojure.browser.repl :as repl]
              [cljs-http.client :as http]
              [enfocus.core :as ef]
              [enfocus.events :as ev]            
              [cljs.core.async :refer [<!]]
              [ajax.formats :refer [raw-response-format]]
              [ajax.core :refer [GET POST]]))

(defn ^export init []
    (.log js/console "Initializing login (not yet implemented)"))