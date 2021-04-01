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

puts "#{Effect.count} food effects created!"

@tomato = FoodItem.create!(name: 'Tomato', img_url: 'https://tinyurl.com/583mpyk', score: 3, user: @admin, effects: [@physical_energy, @inflammation])
@apple = FoodItem.create!(name: 'Apple', img_url: 'https://tinyurl.com/j5aynbpy', score: 3, user: @admin, effects: [@physical_energy])
@avocado = FoodItem.create!(name: 'Avocado', img_url: 'https://tinyurl.com/yer28aek', score: 5, user: @admin, effects: [@physical_energy, @mental_energy])
@garlic = FoodItem.create!(name: 'Garlic', img_url: 'https://tinyurl.com/a7yau78k', score: 2, user: @admin, effects: [@brain_fog])
@bread = FoodItem.create!(name: 'Bread', img_url: 'https://tinyurl.com/a7e8md4e', score: 2, user: @admin, effects: [@brain_fog, @fatigue])
@peanuts = FoodItem.create!(name: 'Peanuts', img_url: 'https://tinyurl.com/2cmnp323', score: 1, user: @admin, effects: [@inflammation])

puts "#{FoodItem.count} food items created!"