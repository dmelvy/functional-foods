class EffectsController < ApplicationController

  # GET /effects
  def index
    @effects = Effect.all

    render json: @effects
  end

  def add_effect
    @food = FoodItem.find(params[:food_id])
    @effect = Effect.find(params[:id])
    @food.effects << @effect

    render json: @food, include: :effects
  end
end
