# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170928010553) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "gamers", force: :cascade do |t|
    t.string   "username",                           null: false
    t.string   "xbox_tag"
    t.string   "psn_tag"
    t.string   "steam_tag"
    t.float    "skill_rating",         default: 0.0
    t.float    "team_rating",          default: 0.0
    t.float    "communication_rating", default: 0.0
    t.float    "play_again_rating",    default: 0.0
    t.float    "total_computed_score", default: 0.0
    t.datetime "created_at",                         null: false
    t.datetime "updated_at",                         null: false
  end

  create_table "reviews", force: :cascade do |t|
    t.string   "game",                 null: false
    t.float    "skill_score",          null: false
    t.float    "teammate_score",       null: false
    t.float    "communication_score",  null: false
    t.float    "total_computed_score"
    t.float    "play_again",           null: false
    t.text     "comments",             null: false
    t.integer  "target_id"
    t.datetime "created_at",           null: false
    t.datetime "updated_at",           null: false
    t.index ["target_id"], name: "index_reviews_on_target_id", using: :btree
  end

end
