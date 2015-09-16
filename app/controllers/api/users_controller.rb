class Api::UsersController < ApplicationController

  def show
    @user = User.includes(:boards, :pins).find(params[:id])
    render :show
  end

  def index
    @users = User.all
    render :index
  end
end
