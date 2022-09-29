(ns manager.components.form
  (:require [re-frame.core :as rf]
            [reagent.core :as r]
            [clojure.string :as string]
            [clojure.set :as cs]
            [manager.components.list :as list]
            [re-com.core :as rc :refer [at]]))

(defn- select-did-update
  [{:keys [field multiple path options selected]} _ clicked-index]
  (let [flatten-options (into [] (reduce concat [] (map second options)))
        element (nth flatten-options (if multiple clicked-index (dec clicked-index)))
        new-value (cond
                    (not multiple) (-> (keep #{"non-null" "list"} selected) (set) (conj element))
                    (contains? selected element) (disj selected element)
                    :else (conj selected element))]
    (rf/dispatch [:update-resource path assoc field new-value])))

(defn- select-did-mount
  [{:keys [selected] :as props} first-render? query-selector node]
  (when node
    (reset! first-render? false)
    (-> (js/jQuery query-selector) (.selectpicker))
    (-> (js/jQuery query-selector) (.selectpicker "val" (clj->js selected)))
    (-> (js/jQuery query-selector) (.on "changed.bs.select" (partial select-did-update props)))))

(defn- select [{:keys [multiple options selected] :as props}]
  #_{:clj-kondo/ignore [:unresolved-symbol]}
  (r/with-let [id (str (random-uuid))
               first-render? (r/atom true)
               query-selector (str "#" (name id))]
    (when-not first-render?
      (-> (js/jQuery query-selector) (.selectpicker "val" (clj->js selected))))
    [:select.selectpicker.form-control
     {:id id
      :ref (partial select-did-mount props first-render? query-selector)
      :title "[none selected]"
      :multiple multiple
      :data-live-search "true"
      :data-selected-text-format "count > 3"
      :data-width "100.35%"
      :data-container "body"
      :style {:margin-left 0 :width 0}}
     (for [[kind items] options]
       [:optgroup {:key kind :label (string/capitalize (name kind))}
        (for [item items]
          [:option {:key item} item])])]))

(defn name-input [kind]
  (let [value (get @(rf/subscribe [:get-resource]) :name "")]
    [:div.input-group
     [:span.input-group-addon "Name:"]
     [:input.form-control
      {:type :text
       :spell-check :false
       :style {:width "100%"}
       :value value
       :placeholder "name"
       :on-change #(rf/dispatch [:update-resource [] assoc :name (-> % .-target .-value)])}]
     (when kind [:span.input-group-addon kind])]))

(defn subname-input [value path & children]
  #_{:clj-kondo/ignore [:unresolved-symbol]}
  (r/with-let [buffer (r/atom value)]
    ^{:key value}
    [:div.input-group
     [:span.input-group-addon "Name:"]
     [:input.form-control
      {:type :text
       :spell-check :false
       :style {:width "100%"}
       :value (name @buffer)
       :placeholder "name"
       :on-change #(reset! buffer (-> % .-target .-value keyword))
       :on-blur #(rf/dispatch [:update-resource path cs/rename-keys {value @buffer}])}]
     children]))

(defn text-input [field label path & children]
  (let [value (get-in @(rf/subscribe [:get-resource]) (conj path field) "")]
    [:div.input-group
     [:span.input-group-addon label]
     [:input.form-control
      {:type :text
       :spell-check :false
       :style {:width "100%"}
       :value value
       :placeholder (name field)
       :on-change #(rf/dispatch [:update-resource path assoc field (-> % .-target .-value)])}]
     children]))

(defn multi-select-input [field label kinds path & children]
  (let [options @(rf/subscribe [:get-names kinds])
        selected (set (get-in @(rf/subscribe [:get-resource]) (conj path field) []))]
    ^{:key field}
    [:div.input-group
     [:span.input-group-addon label]
     [select {:field field
              :multiple true
              :path path
              :options options
              :selected selected}]
     children]))

(defn single-select-input [field label kinds path & children]
  (let [options @(rf/subscribe [:get-names kinds])
        selected (set (get-in @(rf/subscribe [:get-resource]) (conj path field) []))]
    ^{:key field}
    [:div.input-group
     [:span.input-group-addon label]
     [select {:field field
              :multiple false
              :path path
              :options options
              :selected selected}]
     children]))

(defn checkbox [field label item path]
  (let [value (get-in @(rf/subscribe [:get-resource]) (conj path field) #{})
        checked? (contains? value item)]
    [:span.input-group-addon
     [rc/h-box
      :align :center
      :justify :around
      :gap "0.5em"
      :children [[:span label]
                 [:input
                  {:type :checkbox
                   :checked checked?
                   :on-change #(rf/dispatch [:update-resource path assoc field
                                             ((if checked? disj conj) value item)])}]]]]))

(defn text-input-with-toggle [field label toggle path & children]
  (let [value (get-in @(rf/subscribe [:get-resource]) (conj path field) "")
        blank-value? (string/blank? value)
        toggle-checked? (get-in @(rf/subscribe [:get-resource]) (conj path toggle))
        checked? (or toggle-checked? (not blank-value?))]
    (cond
      (and toggle-checked? blank-value?)
      (rf/dispatch [:update-resource path assoc field "Please, do not use it anymore."])

      (every? false? [toggle-checked? blank-value?])
      (rf/dispatch [:update-resource path dissoc field]))
    [:div.input-group
     [:span.input-group-addon
      [rc/h-box
       :align :center
       :justify :around
       :gap "0.5em"
       :children [[:span label]
                  [:input
                   {:type :checkbox
                    :checked checked?
                    :on-change #(rf/dispatch [:update-resource path assoc toggle (not checked?)])}]]]]
     [:input.form-control
      {:type :text
       :spell-check :false
       :style {:width "100%"}
       :value value
       :disabled (not checked?)
       :placeholder "reason"
       :on-change #(rf/dispatch [:update-resource path assoc field (-> % .-target .-value)])}]
     children]))

(defn button [{:keys [style label disabled? reload?]} event & args]
  [:button.btn
   {:class (str "btn-" (name style))
    :disabled disabled?
    :on-click #(do (rf/dispatch (apply vector event args))
                   (when reload? (rf/dispatch [:reload-resources])))}
   label])

(defn row [position & children]
  [rc/h-box :src (at)
   :justify :between
   :align :center
   :padding (case position
              :top "0 0 3.5vh 0"
              :middle "1vh 0 1.5vh 0")
   :children children])

(defn scaffold [& children]
  [rc/v-box :src (at)
   :size "auto"
   :width "25%"
   :children children])

(defn inputs [& children]
  [rc/v-box
   :gap "0.4vh"
   :children children])

(defn subform [& children]
  [rc/v-box :src (at)
   :width "100%"
   :padding "0.1vh 0.2em"
   :gap "0.2vh"
   :children children])

(defn subform-list [size items]
  [rc/v-box :src (at)
   :gap "3vh"
   :max-height (case size
                 :sm "35.3vh"
                 :md "40.3vh"
                 :lg "45.3vh")
   :style {:overflow :auto}
   :children (or (not-empty items)
                 [[list/empty-list-alert]])])

(defn footer [child]
  [rc/box :margin "2vh 0 0 0"
   :child child])

(def root [:data])
