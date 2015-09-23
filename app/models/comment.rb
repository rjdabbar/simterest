class Comment < ActiveRecord::Base

  validates :author_id, :pin_id, :body, presence: true
  belongs_to :author, foreign_key: :author_id, class_name: "User"
  belongs_to :pin
  
end
