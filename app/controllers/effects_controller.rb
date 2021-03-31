class EffectsController < ApplicationController

  # GET /effects
  def index
    @effects = Effect.all

    render json: @effects
  end
end
