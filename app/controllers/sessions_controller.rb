class SessionsController < ApplicationController

  def new
    render :new
  end

  def create
    @user = User.find_by_credentials(user_params[:username], user_params[:password])
    if @user
      sign_in!(@user)
    else
      render :new
    end
  end

  def destroy
    sign_out!
  end

end
