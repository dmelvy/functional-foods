class FoodItemsController < ApplicationController
  before_action :authorize_request, only: [:create, :update, :destroy]
  before_action :set_food_item, only: [:update, :destroy]

  # GET /food_items
  def index
    @food_items = FoodItem.all

    render json: @food_items
  end

  # GET /food_items/1
  def show
    @food = FoodItem.find(params[:id])
    render json: @food, include: :effects
  end

  # POST /food_items
  def create
    @food_item = FoodItem.new(food_item_params)
    @food_item.user = @current_user

    if @food_item.save
      render json: @food_item, status: :created, location: @food_item
    else
      render json: @food_item.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /food_items/1
  def update
    if @food_item.update(food_item_params)
      render json: @food_item
    else
      render json: @food_item.errors, status: :unprocessable_entity
    end
  end

  # DELETE /food_items/1
  def destroy
    @food_item.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_food_item
      @food_item = @current_user.food_items.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def food_item_params
      params.require(:food_item).permit(:name, :img_url, :score)
    end
end
