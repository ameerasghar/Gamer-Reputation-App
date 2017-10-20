class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
        t.string :game, null: false
        t.float :skill_score, null: false
        t.float :teammate_score, null: false
        t.float :communication_score, null: false
        t.float :behavior_score, null: false
        t.float :friend_score, null: false
        t.float :play_again_score, null: false
        t.text :comments, null: false
        t.references :target
        t.timestamps
    end
  end
end
