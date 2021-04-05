# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
FoodItem.destroy_all
Effect.destroy_all
User.destroy_all

@admin = User.create!(username: 'admin', email: 'admin@email.com', password: '123456')

puts "#{User.count} users created!"

@physical_energy = Effect.create!(content: 'Physical Energy')
@mental_energy = Effect.create!(content: 'Mental Energy')
@inflammation = Effect.create!(content: 'Inflammation')
@brain_fog = Effect.create!(content: 'Brain Fog')
@fatigue = Effect.create!(content: 'Fatigue')
@anti_inflammatory = Effect.create!(content: 'Anti-inflammatory')

puts "#{Effect.count} food effects created!"

@tomato = FoodItem.create!(name: 'Tomato', img_url: 'https://i.imgur.com/hIJIYbE.png', score: 3, user: @admin, effects: [@physical_energy, @inflammation])
@apple = FoodItem.create!(name: 'Apple', img_url: 'https://tinyurl.com/j5aynbpy', score: 3, user: @admin, effects: [@physical_energy])
@avocado = FoodItem.create!(name: 'Avocado', img_url: 'https://i.imgur.com/bLl3ot2.png', score: 5, user: @admin, effects: [@physical_energy, @mental_energy])
@garlic = FoodItem.create!(name: 'Garlic', img_url: 'https://i.imgur.com/FoRFTxu.png', score: 2, user: @admin, effects: [@brain_fog])
@bread = FoodItem.create!(name: 'Bread', img_url: 'https://i.imgur.com/7f2KLex.png', score: 2, user: @admin, effects: [@brain_fog, @fatigue])
@peanuts = FoodItem.create!(name: 'Peanuts', img_url: 'https://tinyurl.com/2cmnp323', score: 1, user: @admin, effects: [@inflammation])
@blueberries = FoodItem.create!(name: 'Blueberries', img_url: 'http://assets.stickpng.com/thumbs/594578f15eb5d45f10e35b41.png', score: 4, user: @admin, effects: [@anti_inflammatory])
@banana = FoodItem.create!(name: 'Banana', img_url: 'http://assets.stickpng.com/images/580b57fcd9996e24bc43c132.png', score: 4, user: @admin, effects: [@physical_energy])
@eggs = FoodItem.create!(name: 'Eggs', img_url: 'https://pngimg.com/uploads/egg/egg_PNG97938.png', score: 2, user: @admin, effects: [@physical_energy, @inflammation])
@broccoli = FoodItem.create!(name: 'Broccoli', img_url: 'https://pngimg.com/uploads/broccoli/broccoli_PNG72877.png', score: 5, user: @admin, effects: [@physical_energy, @anti_inflammatory])
@ginger = FoodItem.create!(name: 'Ginger', img_url: 'http://assets.stickpng.com/images/5b4eed0cc051e602a568ce0c.png', score: 5, user: @admin, effects: [@anti-inflammatory, @mental_energy])

puts "#{FoodItem.count} food items created!"