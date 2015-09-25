class Api::UsersController < ApplicationController

  def show
    @user = User.includes(:boards, :pins).find_by(slug: params[:id])
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
end
