class CreateJoinTableFoodItemsEffects < ActiveRecord::Migration[6.1]
  def change
    create_join_table :food_items, :effects do |t|
      # t.index [:food_item_id, :effect_id]
      # t.index [:effect_id, :food_item_id]
    end
  end
end
