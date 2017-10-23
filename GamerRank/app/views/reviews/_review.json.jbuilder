json.extract! review, :id, :skill_score, :teammate_score, :communication_score, :play_again, :comments, :target_id, :game_id, :created_at, :updated_at
json.url review_url(review, format: :json)
