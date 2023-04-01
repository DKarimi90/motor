class Car < ApplicationRecord
    belongs_to :show_room
    has_many :reviews 
    has_many :users, through: :reviews
end
