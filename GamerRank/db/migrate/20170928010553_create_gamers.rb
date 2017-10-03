class CreateGamers < ActiveRecord::Migration[5.0]
  def change
    create_table :gamers do |t|
    	t.string :username, null: false
    	t.string :xbox_tag
    	t.string :psn_tag
    	t.string :steam_tag
    	t.float :skill_rating, default: 0.0
    	t.float :team_rating, default: 0.0
    	t.float :communication_rating, default: 0.0
    	t.float :play_again_rating, default: 0.0
    	t.float :total_computed_score, default: 0.0
      t.timestamps
    end
  end
end
