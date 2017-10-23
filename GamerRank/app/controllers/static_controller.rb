class StaticController < ApplicationController

  def index
  end

  def leaderboard
  	Gamer.order(:total_computed_score).first(3)
  end

  def test
  end
end
