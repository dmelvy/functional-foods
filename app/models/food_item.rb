class FoodItem < ApplicationRecord
  belongs_to :user
  has_and_belongs_to_many :effects
end
