
  json.array! @search_results do |result|
    json._type result.searchable_type
    if result.searchable_type == "User"
      json.partial! "api/users/user", user: result.searchable
    elsif result.searchable_type == "Board"
      json.partial! "api/boards/board", board: result.searchable
    end
    json.id "#{result.searchable_type}_#{result.searchable_id}"
  end
