Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  post '/food_items/:food_id/effects/:id', to: 'effects#add_effect'
  resources :effects, only: :index
  resources :food_items
  resources :users, only: :create
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
