class Board < ActiveRecord::Base
  include PgSearch

  validates :title, :creator_id, presence: true

  belongs_to :creator, foreign_key: :creator_id, class_name: "User"
  has_many :pins, dependent: :destroy

  multisearchable  against: :title
  after_initialize :default_boards_to_not_be_secret

  def index_thumbs
    self.pins[-4..-1]
  end

  def to_param
    slug
  end

  def creator_slug
    self.creator.slug
  end

  private

  def default_boards_to_not_be_secret
    self.secret = false
  end

end
