class User < ActiveRecord::Base
  include PgSearch
  validates :username, :session_token, :password_digest, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  attr_accessor :password

  after_initialize :ensure_session_token
  before_save :set_slug

  has_many :boards, foreign_key: :creator_id, dependent: :destroy
  has_many :pins, foreign_key: :pinner_id, dependent: :destroy
  has_many :shared_pins, foreign_key: :via_user_id, class_name: "Pin"
  has_many :comments, foreign_key: :author_id, dependent: :destroy
  has_attached_file :avatar, default_url: "missing.png"
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\Z/

  multisearchable against: :username

  def self.generate_secure_token
    SecureRandom.urlsafe_base64(16)
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user.try(:is_password?, password) ? user : nil
  end

  def self.find_or_create_by_auth_hash(auth_hash)
    user = User.find_by(
           provider: auth_hash[:provider],
           uid: auth_hash[:uid])

   unless user
     token = SecureRandom::urlsafe_base64(6)
     user = User.create!(
           provider: auth_hash[:provider],
           uid: auth_hash[:uid],
           full_name: auth_hash[:info][:name],
           avatar_url: auth_hash[:info][:image],
           slug: auth_hash[:info][:name].downcase.split.join + "-" + token,
           username: auth_hash[:info][:name].downcase.split.join + "-" + token,
           password: SecureRandom::urlsafe_base64)
   end

   user
  end

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
  end

  def set_slug
    self.slug = self.username
  end


  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = User.generate_secure_token
    self.save!
    self.session_token
  end

  def get_avatar_url
    avatar_url || avatar.url
  end

  def to_param
    slug
  end

  protected

  def ensure_session_token
    self.session_token ||= User.generate_secure_token
  end

end
