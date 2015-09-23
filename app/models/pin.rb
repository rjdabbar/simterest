class Pin < ActiveRecord::Base
  include PgSearch
  validates :pinner_id, :board_id, presence: true

  belongs_to :pinner, foreign_key: :pinner_id, class_name: "User"
  belongs_to :via_user, foreign_key: :via_user_id, class_name: "User"
  belongs_to :board

  has_many :comments
  
  has_attached_file :image
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  multisearchable against: :description

  def get_image_url
    source_url || image.url
  end
end
