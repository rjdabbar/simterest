class Api::SessionsController < ApplicationController

  def show
    current_user ? render :show : render json: {}
  end

end
