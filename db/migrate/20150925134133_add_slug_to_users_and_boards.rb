class AddSlugToUsersAndBoards < ActiveRecord::Migration
  def change
    add_column :users, :slug, :string
    add_column :boards, :slug, :string
  end
end
