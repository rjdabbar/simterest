class Api::BoardsController < ApplicationController

  def new
  end

  def create
    @board = current_user.boards.new(board_params)
    if @board.save
      render json: @board
    else
      render json: @board.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
    @board = Board.find(params[:id])
    if @board.update(board_params)
      render :show
    else
      render :edit
    end
  end

  def show
    @board = Board.find(params[:id])
    render :show
  end

  def index
    @boards = current_user.boards
    render json: @boards
  end

  def destroy
    @board = current_user.boards.find(params[:id])
    @board.destroy!
    render json: {}
  end

  private

  def board_params
    params.require(:board).permit(:title, :description, :category, :secret)
  end
end
