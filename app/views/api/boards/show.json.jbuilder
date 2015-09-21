json.extract! @board, :id, :title, :description, :category,
                          :creator_id, :secret, :created_at, :updated_at
json.main_pin_id @board.pins.last.id
json.main_pin_image @board.pins.last.get_image_url
json.pins @board.pins do |pin|
  json.extract! pin, :id, :pinner_id, :description, :image_url, :board_id,
            :image_alt, :source_url, :via_user_id, :created_at, :updated_at
  json.image_url pin.get_image_url
  json.board_title @board.title
end
