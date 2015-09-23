class User < ActiveRecord::Base
  include PgSearch
  validates :username, :session_token, :password_digest, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  attr_accessor :password

  after_initialize :ensure_session_token, :ensure_username
  
  has_many :boards, foreign_key: :creator_id
  has_many :pins, foreign_key: :pinner_id
  has_many :shared_pins, foreign_key: :via_user_id, class_name: "Pin"
  has_many :comments, foreign_key: :author_id
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

  def self.find_or_create_by_auth_hash(hash)
    user = User.find_by(
           provider: auth_hash[:provider],
           uid: auth_hash[:uid])

   unless user
     user = User.create!(
           provider: auth_hash[:provider],
           uid: auth_hash[:uid],
           full_name: auth_hash[:info][:name],

           password: SecureRandom::urlsafe_base64)
   end

   user
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

  def ensure_username
    self.username ||= self.full_name.downcase.split.join + SecureRandom::urlsafe_base64(6)
  end
end
