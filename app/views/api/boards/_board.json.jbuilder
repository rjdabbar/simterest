json.extract! board, :id, :creator_id, :title, :description, :category,
                        :secret, :created_at, :updated_at
json.main_pin_image board.pins.first.get_image_url if board.pins.length > 0
json.pin_thumb_one board.pins[-1].get_image_url if board.pins.length > 1
json.pin_thumb_two board.pins[-2].get_image_url if board.pins.length > 2
json.pin_thumb_three board.pins[-3].get_image_url if board.pins.length > 3
