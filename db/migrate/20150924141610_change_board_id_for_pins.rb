class ChangeBoardIdForPins < ActiveRecord::Migration
  def change
    change_column_null :pins, :board_id, true
  end
end
