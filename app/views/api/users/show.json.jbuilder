# THIS IS THE ONLY FILE THAT WILL SERVE UP JSON FOR THE TIME
# ADD TO THIS AS NEW MODELS ARE CREATED
json.extract! @user, :id, :username
json.boards @user.boards do |board|
  json.extract! board, :id, :creator_id, :title, :description, :category, :secret
end