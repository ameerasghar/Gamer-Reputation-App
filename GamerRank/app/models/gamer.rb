class Gamer < ApplicationRecord
  	has_many :recieved_reviews, :class_name => 'Review', :foreign_key => 'target_id'
	def self.compute_scores(reviews)
    	skill_score = 0
      teammate_score = 0
      communication_score = 0
      play_again_score = 0
      total_review_number = reviews.count
    	reviews.each do |r|
      	skill_score += r.skill_score
        teammate_score += r.teammate_score
        communication_score += r.communication_score
        play_again_score += r.play_again
      end
      # The actual score computing
      skill_average = skill_score / (total_review_number * 10).to_f
      teammate_average = teammate_score / (total_review_number * 10).to_f
      communication_average = communication_score / (total_review_number * 10).to_f
      play_again_average = play_again_score / (total_review_number * 10).to_f
      all_scores = {:skill => skill_average.round(2), :team => teammate_average.round(2), :comm => communication_average.round(2), :play => play_again_average.round(2)}

  end

  def self.compute_weighted_score(scores={})
    total = scores[:skill] + scores[:team] + scores[:comm] + scores[:play]
    final_score = total / 4
    scores[:weighted] = final_score
  end

end
