class Api::SessionsController < ApplicationController

  def new
  end

  def create
    @user = User.find_by_credentials(user_params[:username], user_params[:password])
    if @user
      sign_in!(@user)
      redirect_to root_url
    else
      render :new
    end
  end

  def show
    if current_user
      render :show
    else
      render json: {}
    end
  end

  def destroy
    sign_out!
  end

end
