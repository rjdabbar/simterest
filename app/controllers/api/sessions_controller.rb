class Api::SessionsController < ApplicationController

  def show
    if current_user
      render :show
    else
      render json: {}
    end
  end

  def destroy
    sign_out!
    render json: {}
  end

  def omniauth
    user = User.find_or_create_by_auth_hash(auth_hash)
    sign_in!(user)
  end

  protected

  def auth_hash
    request.env['omniauth.auth']
  end

end
