class Pin < ActiveRecord::Base

  validates :pinner_id, :board_id, presence: true
  # validate :has_an_image_source

  belongs_to :pinner, foreign_key: :pinner_id, class_name: "User"
  belongs_to :via_user, foreign_key: :via_user_id, class_name: "User"
  belongs_to :board
  has_attached_file :image
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  after_initialize :set_image_url
  # private

  # def has_an_image_source
  #   errors.add(:image, "requires an image") unless self.source_url || self.image
  # end

  def set_image_url
    self.image_url = self.source_url ? self.source_url : self.image.url
  end
end
