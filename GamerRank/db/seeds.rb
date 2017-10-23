# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Gamer.create!(username: "RealHouseHusband", xbox_tag: "SleepyMan908", psn_tag: "FieryOcean", steam_tag: "PcMasterRace")
Gamer.create!(username: "OvertlyTiredCouch", xbox_tag: "SingingBird", psn_tag: "WhoaWhoa", steam_tag: "ClingingZebras")
Gamer.create!(username: "StrongFace", xbox_tag: "TealerDaws", psn_tag: "Yonanas", steam_tag: "NeedlesTags")
Gamer.create!(username: "FrodoSwaggins", xbox_tag: "OverwatchNerd", psn_tag: "SlingingHashy", steam_tag: "Carrrrrl")
Gamer.create!(username: "Viooola", xbox_tag: "Chargeup", psn_tag: "tradingFaces", steam_tag: "NanoParts")
Gamer.create!(username: "YaaWaad", xbox_tag: "TryHardFan", psn_tag: "Lobododie", steam_tag: "AngelFace")

Review.create!(skill_score: 9.0, teammate_score: 8.0, communication_score: 10.0, play_again: 8.0, game: "Destiny", comments: Faker::RickAndMorty.quote, target_id: 1)
Review.create!(skill_score: 7.0, teammate_score: 9.0, communication_score: 8.0, play_again: 8.5, game: "Destiny", comments: Faker::RickAndMorty.quote, target_id: 1)
Review.create!(skill_score: 8.0, teammate_score: 8.0, communication_score: 9.0, play_again: 6.7, game: "Destiny", comments: Faker::RickAndMorty.quote, target_id: 1)
Review.create!(skill_score: 9.0, teammate_score: 7.0, communication_score: 6.0, play_again: 9.1, game: "Destiny", comments: Faker::RickAndMorty.quote, target_id: 1)
Review.create!(skill_score: 9.0, teammate_score: 8.0, communication_score: 10.0, play_again: 8.3, game: "Destiny", comments: Faker::RickAndMorty.quote, target_id: 1)

Review.create!(skill_score: 4.0, teammate_score: 6.0, communication_score: 4.0, play_again: 5.6, game: "Destiny", comments: Faker::RickAndMorty.quote, target_id: 2)
Review.create!(skill_score: 5.0, teammate_score: 6.0, communication_score: 7.0, play_again: 7.6, game: "Destiny", comments: Faker::RickAndMorty.quote, target_id: 2)
Review.create!(skill_score: 8.0, teammate_score: 8.0, communication_score: 9.0, play_again: 5.6, game: "Destiny", comments: Faker::RickAndMorty.quote, target_id: 2)
Review.create!(skill_score: 9.0, teammate_score: 7.0, communication_score: 6.0, play_again: 8.4, game: "Destiny", comments: Faker::RickAndMorty.quote, target_id: 2)
Review.create!(skill_score: 9.0, teammate_score: 8.0, communication_score: 10.0, play_again: 4.5, game: "Destiny", comments: Faker::RickAndMorty.quote, target_id: 2)
