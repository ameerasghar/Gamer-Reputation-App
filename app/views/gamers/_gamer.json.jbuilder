json.extract! gamer, :id, :username, :xbox_tag, :psn_tag, :steam_tag, :skill_rating, :teammate_rating, :communication_rating, :behavior_rating, :friend_rating, :play_again_rating, :overall_rating, :created_at, :updated_at
json.url gamer_url(gamer, format: :json)
