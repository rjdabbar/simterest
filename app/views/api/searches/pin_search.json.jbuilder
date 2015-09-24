json.array! @search_results do |result|
  json.partial! "api/pins/pin", pin: result
end
