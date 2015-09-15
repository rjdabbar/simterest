class SessionsController < ApplicationController

  def new
  end

  def create
    @user = User.find_by_credentials(user_params[:username], user_params[:password])
    if @user
      sign_in!(@user)
      redirect_to root
    else
      render :new
    end
  end

  def destroy
    sign_out!
  end

end
