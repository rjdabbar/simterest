# THIS IS THE ONLY FILE THAT WILL SERVE UP JSON FOR THE TIME
# ADD TO THIS AS NEW MODELS ARE CREATED
json.extract! @user, :id, :username, :full_name, :description, :location
json.avatar_url asset_path(@user.avatar.url)
json.boards @user.boards do |board|
  json.extract! board, :id, :creator_id, :title, :description, :category,
                          :secret, :created_at, :updated_at
end
json.pins @user.pins do |pin|
  json.extract! pin, :id, :pinner_id, :description, :board_id,
          :image_alt, :source_url, :via_user_id, :created_at, :updated_at
  json.image_url pin.get_image_url
end
