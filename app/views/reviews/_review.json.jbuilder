json.extract! review, :id, :game, :skill_score, :teammate_score, :communication_score, :behavior_score, :friend_score, :play_again_score, :comments, :target_id, :created_at, :updated_at
json.url review_url(review, format: :json)
