class StaticController < ApplicationController
    protect_from_forgery with: :null_session

    def index
    end

    def search
        search_data = params[:searchData]
        all_gamers = Gamer.all.select(:id, :username)
        found_gamers = []
        all_gamers.each do |g| 
            if g.username.include?(search_data)
                found_gamers << g
            end
        end
        render json: {results: found_gamers}
    end
end
