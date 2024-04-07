(def gemstone {:name "safira" :color "blue" :rarity "rare"})

(defn describe-gemstone [gemstone]
  (str "The " (:name gemstone) " gemstone is a beautiful shade of " (:color gemstone) " and is " (:rarity gemstone) "."))

(println (describe-gemstone gemstone))
