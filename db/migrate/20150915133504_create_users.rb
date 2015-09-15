class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username, unique: true
      t.string :session_token
      t.string :password_digest
      t.timestamps null: false
    end
  end
end
