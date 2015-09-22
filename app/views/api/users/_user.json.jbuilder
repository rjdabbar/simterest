json.extract! user, :id, :username, :full_name, :description, :location
json.avatar_url asset_path(user.avatar.url)
