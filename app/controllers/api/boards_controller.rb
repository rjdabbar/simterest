class Api::BoardsController < ApplicationController

  def new
  end

  def create
    @board = current_user.boards.new(board_params)
    if @board.save
      render :show
    else
      render :new
    end
  end

  def edit
    @board = Board.find(params[:id])
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
  end

  def index
    @boards = Board.all
  end

  def destroy
    @board = Board.find(params[:id])
    @board.destroy!
    render :index
  end

  private

  def board_params
    params.require(:board).permit(:title, :description, :category, :secret)
  end
end
