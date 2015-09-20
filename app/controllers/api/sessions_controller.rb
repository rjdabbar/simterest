class Api::SessionsController < ApplicationController

  def show
    if current_user
      render :show
    else
      render json: {}
    end
  end

end
