class Api::SearchesController < ApplicationController

  def search
    if params[:multi]
      @search_results = PgSearch
        .multisearch(params[:query])
        .includes(:searchable)
      render :multi_search
    else
      @search_results = Pin.search_by_description(params[:query])
      render :pin_search
    end
  end

end
