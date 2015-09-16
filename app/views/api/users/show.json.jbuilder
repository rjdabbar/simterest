# THIS IS THE ONLY FILE THAT WILL SERVE UP JSON FOR THE TIME
# ADD TO THIS AS NEW MODELS ARE CREATED
json.extract! @user, :id, :username
json.boards @user.boards do |board|
  json.extract! board, :id, :creator_id, :title, :description, :category,
                          :secret, :created_at, :updated_at
  json.pins board.pins do |pin|
    json.extract! pin, :id, :pinner_id, :title, :description, :image_url,
            :image_alt, :source_url, :via_user_id, :created_at, :updated_at
  end
end
