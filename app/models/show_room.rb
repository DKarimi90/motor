class ShowRoom < ApplicationRecord
    has_many :cars 
    has_many :users, through: :cars
    has_many :reviews, through: :cars
end
