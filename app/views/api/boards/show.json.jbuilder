json.partial! "api/boards/board", board: @board
json.pins @board.pins do |pin|
  json.partial! "api/pins/pin", pin: pin
end
