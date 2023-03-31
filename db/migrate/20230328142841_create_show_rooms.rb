class CreateShowRooms < ActiveRecord::Migration[7.0]
  def change
    create_table :show_rooms do |t|
      t.string :name
      t.string :address
      t.string :owner
      t.integer :start_year

      t.timestamps
    end
  end
end
