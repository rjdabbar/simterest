class Pin < ActiveRecord::Base

  validates :title, :pinner_id, :board_id, presence: true

  belongs_to :pinner, foreign_key: :pinner_id, class_name: "User"
  belongs_to :via_user, foreign_key: :via_user_id, class_name: "User"
  belongs_to :board

end
