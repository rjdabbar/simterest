# THIS IS THE ONLY FILE THAT WILL SERVE UP JSON FOR THE TIME
# ADD TO THIS AS NEW MODELS ARE CREATED
json.extract! @user, :id, :username, :full_name, :description, :location
json.avatar_url asset_path(@user.avatar.url)
json.boards @user.boards do |board|
  json.extract! board, :id, :creator_id, :title, :description, :category,
                          :secret, :created_at, :updated_at
  json.main_pin_image board.pins.first.get_image_url
  json.pin_thumb_one board.pins[-1].get_image_url if board.pins.length > 1
  json.pin_thumb_two board.pins[-2].get_image_url if board.pins.length > 2
  json.pin_thumb_three board.pins[-3].get_image_url if board.pins.length > 3

end
json.pins @user.pins do |pin|
  json.extract! pin, :id, :pinner_id, :description, :board_id,
          :image_alt, :source_url, :via_user_id, :created_at, :updated_at
  json.board_title pin.board.title
  json.image_url pin.get_image_url
end
