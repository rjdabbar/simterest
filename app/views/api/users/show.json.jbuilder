# THIS IS THE ONLY FILE THAT WILL SERVE UP JSON FOR THE TIME
# ADD TO THIS AS NEW MODELS ARE CREATED
json.partial! "api/users/user", user: @user
json.boards @user.boards do |board|
  json.partial! "api/boards/board", board: board
end
json.pins @user.pins do |pin|
  json.partial! "api/pins/pin", pin: pin
end
