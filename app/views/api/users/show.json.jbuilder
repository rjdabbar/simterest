json.extract! @user, :id, :username
json.boards @user.boards do |board|
  json.extract! board, :id, :creator_id, :title, :description, :category, :secret
end
