class CreateCars < ActiveRecord::Migration[7.0]
  def change
    create_table :cars do |t|
      t.string :image_url
      t.string :name
      t.string :model
      t.string :mileage
      t.string :transmission
      t.integer :price
      t.integer :show_room_id

      t.timestamps
    end
  end
end
