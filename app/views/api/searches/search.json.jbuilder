json.results do
  json.array! @search_results do |result|
    json.id result.id
    json.type result.searchable_type
    if result.searchable_type == "User"

      json.username result.username

    elsif result.searchable_type == "Board"

    end

end
