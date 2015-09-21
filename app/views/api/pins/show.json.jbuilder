json.extract! @pin, :id, :description, :board_id
json.board_title @pin.board.title
json.image_url @pin.get_image_url
