class CreateBoards < ActiveRecord::Migration
  def change
    create_table :boards do |t|
      t.string :title, null: false
      t.text :description
      t.string :category
      t.integer :creator_id, null: false, index: true
      t.boolean :secret
      t.timestamps null: false
    end
  end
end
