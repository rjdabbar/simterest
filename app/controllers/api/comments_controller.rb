class Api::CommentsController < ApplicationController

  def index
  end

  def show
    @comment = Comment.find(params[:id])
  end

  def create
    @comment = current_user.comments.new(comment_params)
    if @comment.save
      render json: @comment
    else
      render json: @comment.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
    @comment = Comment.find(params[:id])
    if @comment.update(comment_params)
      render json: @comment
    else
      render json: @comment.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy

  end

  private

  def comment_params
    params.require(:comment).permit(:pin_id, :body)
  end
end
