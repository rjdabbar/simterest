class User < ActiveRecord::Base

  validates :username, :session_token, :password_digest, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  attr_accessor :password

  after_initialize :ensure_session_token
  has_attached_file :avatar
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\Z/
  has_many :boards, foreign_key: :creator_id
  has_many :pins, foreign_key: :pinner_id
  has_many :shared_pins, foreign_key: :via_user_id, class_name: "Pin"

  def self.generate_secure_token
    SecureRandom.urlsafe_base64(16)
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user.try(:is_password?, password) ? user : nil
  end

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = User.generate_secure_token
    self.save!
    self.session_token
  end

  protected

  def ensure_session_token
    self.session_token ||= User.generate_secure_token
  end
end
