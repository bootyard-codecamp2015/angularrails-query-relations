class API::Public::VotesController < ApplicationController
  def create
    @vote = Vote.create(votes_params)
  end

  private

  	def votes_params
  		params.require(:vote).permit(:topic_id)
  	end
end 