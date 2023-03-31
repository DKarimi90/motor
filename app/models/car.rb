class Car < ApplicationRecord
    has_many :reviews
    has_many :users, through: :reviews
    belongs_to :show_room 
end
