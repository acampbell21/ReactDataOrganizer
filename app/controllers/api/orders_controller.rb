require 'pry'

class Api::OrdersController < ApplicationController
  before_action :set_api_order, only: [:show, :update, :destroy]

  # GET /api/orders
  def index
    @orders = Order.all

    render json: @orders
  end

  # GET /api/orders/1
  def show
    render json: @order
  end

  # POST /api/orders
  def create
    @order = Order.new(api_order_params)

    if @order.save
      render json: @order, status: :created
    else
      render json: @order.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /api/orders/1
  def update
    if @order.update(api_order_params)
      render json: @order
    else
      render json: @order.errors, status: :unprocessable_entity
    end
  end

  # DELETE /api/orders/1
  def destroy
    @order.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_api_order
      @order = Order.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def api_order_params
      params.fetch(:order).permit(:name, :description, :appointmenttime, :supplies)
    end
end
