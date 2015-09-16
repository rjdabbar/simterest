class Board < ActiveRecord::Base

  validates :title, :creator_id, presence: true

  belongs_to :creator, foreign_key: :creator_id, class_name: "User"
  has_many :pins

  after_initialize :default_boards_to_not_be_secret

  private

  def default_boards_to_not_be_secret
    self.secret = false
  end

end
