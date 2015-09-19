class Api::SessionsController < ApplicationController

  def new
  end

  def create
    @user = User.find_by_credentials(user_params[:username], user_params[:password])
    if @user
      sign_in!(@user)
      redirect_to "/#" + "#{current_user.id}"
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



    def user_params
      params.require(:user).permit(:username, :password)
    end
end
