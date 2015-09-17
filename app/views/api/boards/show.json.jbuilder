json.extract! @board, :id, :title, :description, :category,
                          :creator_id, :secret, :created_at, :updated_at
json.pins @board.pins do |pin|
  json.extract! pin, :id, :pinner_id, :description, :image_url, :board_id,
            :image_alt, :source_url, :via_user_id, :created_at, :updated_at
end
