json.extract! pin, :id, :pinner_id, :description, :image_url, :board_id,
          :image_alt, :source_url, :via_user_id, :created_at, :updated_at
json.board_title pin.board.title
json.image_url pin.get_image_url

json.comments pin.comments do |comment|
  json.partial! "api/comments/comment", comment: comment
end
