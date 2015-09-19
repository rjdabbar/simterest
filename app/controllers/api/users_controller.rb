class Api::UsersController < ApplicationController

  def new
    @user = User.new
    render :new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      sign_in!(@user)
      render :show
    else

    end
  end

  def show
    @user = User.includes(:boards, :pins).find(params[:id])
    render :show
  end

  def index
    @users = User.all
    render :index
  end

  def update
    @user = User.find(params[:id])
    if @user.update(edit_params)
      render :show
    else
      render json: @user.errors.full_messages, status: :unprocessable_entity
    end
  end

  private

  def edit_params
    params.require(:user).permit(:username, :avatar, :location,
                                  :description, :full_name)
  end

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
