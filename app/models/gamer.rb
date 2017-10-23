class Gamer < ApplicationRecord
    has_many :recieved_review, :class_name => 'Review', :foreign_key => 'target_id'
    def self.compute_ratings(reviews)
        ratings = {
            :skill => 0, 
            :teammate => 0, 
            :communication => 0, 
            :play_again => 0, 
            :behavior => 0, 
            :friend => 0,
            :overall => 0 }
        total_review_number = reviews.count
        reviews.each do |r|
            ratings[:skill] += r.skill_score
            ratings[:teammate] += r.teammate_score
            ratings[:communication] += r.communication_score
            ratings[:behavior] += r.behavior_score
            ratings[:friend] += r.friend_score
            ratings[:play_again] += r.play_again_score
        end
        ratings[:skill] = ratings[:skill] / (total_review_number * 10)
        ratings[:communication] = ratings[:communication] / (total_review_number * 10)
        ratings[:teammate] = ratings[:teammate] / (total_review_number * 10)
        ratings[:behavior] = ratings[:behavior] / (total_review_number * 10)
        ratings[:friend] = ratings[:friend] / (total_review_number * 10)
        ratings[:play_again] = ratings[:play_again] / (total_review_number * 10)
        return ratings
    end

    def self.compute_overall_rating(ratings={})
        skill_coefficient = ratings[:skill]
        teammate_coefficient = ratings[:teammate]
        behavior_coefficient = ratings[:behavior]
        friend_coefficient =  ratings[:friend]
        play_again_coefficient =  ratings[:play_again]
        communication_coefficient =  ratings[:communication]
        
        total_points = skill_coefficient + teammate_coefficient + behavior_coefficient + friend_coefficient + play_again_coefficient + communication_coefficient
        overall = total_points / 4
        ratings[:overall] = overall
        return ratings
    end
end
