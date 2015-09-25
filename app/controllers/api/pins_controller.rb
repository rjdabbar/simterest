class Api::PinsController < ApplicationController

  def index
    @pins = current_user.pins
    render json: @pins
  end

  def show
    @pin = Pin.include(:comments).find(params[:id])
    render :show
  end

  def create
    @pin = current_user.pins.new(pin_params)
    if @pin.save
      render :show
    else
      render json: @pin.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @pin = Pin.find(params[:id])
    @pin.destroy!
    render json: {}
  end

  def update
    @pin = Pin.find(params[:id])
    if @pin.update(pin_params)
      render json: @pin
    else
      render json: @pin.errors.full_messages, status: :unprocessable_entity
    end
  end

  private

  def pin_params
    params.require(:pin).permit(:title, :description, :board_id, :source_url,
                                :image_url, :image_alt, :via_user_id, :image)
  end
end
