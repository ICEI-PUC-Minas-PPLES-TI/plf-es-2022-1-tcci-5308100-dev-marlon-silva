(ns manager.views
  (:require [re-frame.core :as rf]
            [re-com.core :as rc :refer [at]] 
            [manager.routes :as routes]))

;; home

(defn home-title []
  (let [name "BFF Squared"]
    [rc/title
     :src   (at)
     :label (str "Hello from " name ". This is the Home Page.")
     :level :level1]))

(defn link-to-about-page []
  [rc/hyperlink
   :src      (at)
   :label    "go to About Page"
   :on-click #(rf/dispatch [:redirect :about])])

(defn home-panel []
  [rc/v-box
   :src      (at)
   :gap      "1em"
   :children [[home-title]
              [link-to-about-page]]])


(defmethod routes/panels :home-panel [] [home-panel])

;; about

(defn about-title []
  [rc/title
   :src   (at)
   :label "This is the About Page."
   :level :level1])

(defn link-to-home-page []
  [rc/hyperlink
   :src      (at)
   :label    "go to Home Page"
   :on-click #(rf/dispatch [:redirect :home])])

(defn about-panel [] 
  [rc/v-box
   :src      (at)
   :gap      "1em"
   :children [[about-title]
              [link-to-home-page]]])

(defmethod routes/panels :about-panel [] [about-panel])

;; main

(defn main-panel []
  (let [active-panel (rf/subscribe [:get-active-panel])
        _ (rf/dispatch [:get-resource-list [:graphql :queries]])]
    [rc/v-box
     :src      (at)
     :height   "100%"
     :children [(routes/panels @active-panel)]]))
