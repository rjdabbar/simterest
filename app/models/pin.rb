class Pin < ActiveRecord::Base
  include PgSearch
  validates :pinner_id, presence: true

  belongs_to :pinner, foreign_key: :pinner_id, class_name: "User"
  belongs_to :via_user, foreign_key: :via_user_id, class_name: "User"
  belongs_to :board

  has_many :comments

  has_attached_file :image
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  pg_search_scope :search_by_description, against: :description,
                    using: { tsearch: { prefix: true } }

  def get_image_url
    source_url || image.url
  end
end
