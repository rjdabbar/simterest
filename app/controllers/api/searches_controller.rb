class Api::SearchesController < ApplicationController

  def search
    if params[:multi]
      @search_results = PgSearch
        .multisearch(params[:query])
        .includes(:searchable)
      render :search
    else

    end
  end

end
