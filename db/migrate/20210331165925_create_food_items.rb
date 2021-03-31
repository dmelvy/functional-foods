class CreateFoodItems < ActiveRecord::Migration[6.1]
  def change
    create_table :food_items do |t|
      t.string :name
      t.string :img_url
      t.integer :score
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
