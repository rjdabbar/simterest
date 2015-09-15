class Board < ActiveRecord::Base

  validates :title, :creator_id, presence: true

  belongs_to :creator,
    foreign_key: :creator_id,
    class: "User"
end
