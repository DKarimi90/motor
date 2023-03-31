Rails.application.routes.draw do

  resources :reviews, only: [:index, :create, :destroy]
  resources :show_rooms
  resources :users, only: [:index]
  resources :cars, except: [:patch]
  
end
