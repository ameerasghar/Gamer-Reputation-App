class CreateGamers < ActiveRecord::Migration[5.1]
  def change
    create_table :gamers do |t|
        t.string :username, null: false
        t.string :xbox_tag
        t.string :psn_tag
        t.string :steam_tag
        t.float :skill_rating, default: 0.0
        t.float :teammate_rating, default: 0.0 
        t.float :communication_rating, default: 0.0
        t.float :behavior_rating, default: 0.0
        t.float :friend_rating, default: 0.0 
        t.float :play_again_rating, default: 0.0
        t.float :overall_rating, default: 0.0
      t.timestamps
    end
  end
end
