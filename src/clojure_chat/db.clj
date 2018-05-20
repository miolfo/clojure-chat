(ns clojure-chat.db)

(def db 
    {:classname "org.sqlite.JDBC"
    :subprotocol "sqlite"
    :subname "chat.db"})