class CreatePins < ActiveRecord::Migration
  def change
    create_table :pins do |t|
      t.string :title, null: false
      t.text :description
      t.integer :pinner_id, null: false, index: true
      t.integer :board_id, null: false, index: true
      t.string :image_url
      t.string :source_url
      t.string :image_alt
      t.integer :via_user_id, index: true
      t.timestamps null: false
    end
  end
end
