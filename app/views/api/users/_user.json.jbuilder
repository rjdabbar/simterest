json.extract! user, :id, :username, :full_name, :description, :location, :slug
json.avatar_url asset_path(user.get_avatar_url)
