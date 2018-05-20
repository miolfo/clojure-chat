(ns clojure-chat.db
  (:require [clojure.java.jdbc :as jdbc]))

(def db
  {:classname "org.sqlite.JDBC"
   :subprotocol "sqlite"
   :subname "chat.db"})

(defn create-messages-table []
  (jdbc/execute! db (jdbc/create-table-ddl :messages
                                           [[:id :integer :primary :key :autoincrement]
                                            [:userid :integer]
                                            [:message :text]
                                            [:timestamp :text]])))

(defn table-exists [name]
  (if
   (= 1 (count (jdbc/query db ["SELECT name FROM sqlite_master WHERE type='table' AND name=?" name]))) true false))

(defn init-db []
  (if-not (table-exists "messages") (create-messages-table)))