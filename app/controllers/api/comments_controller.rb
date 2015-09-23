class Api::CommentsController < ApplicationController

  def index
  end

  def show
    @comment = Comment.find(params[:id])
  end

  def create

  end

  def update

  end

  def destroy

  end
end
