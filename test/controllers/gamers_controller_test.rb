require 'test_helper'

class GamersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @gamer = gamers(:one)
  end

  test "should get index" do
    get gamers_url
    assert_response :success
  end

  test "should get new" do
    get new_gamer_url
    assert_response :success
  end

  test "should create gamer" do
    assert_difference('Gamer.count') do
      post gamers_url, params: { gamer: { behavior_rating: @gamer.behavior_rating, communication_rating: @gamer.communication_rating, friend_rating: @gamer.friend_rating, overall_rating: @gamer.overall_rating, play_again_rating: @gamer.play_again_rating, psn_tag: @gamer.psn_tag, skill_rating: @gamer.skill_rating, steam_tag: @gamer.steam_tag, teammate_rating: @gamer.teammate_rating, username: @gamer.username, xbox_tag: @gamer.xbox_tag } }
    end

    assert_redirected_to gamer_url(Gamer.last)
  end

  test "should show gamer" do
    get gamer_url(@gamer)
    assert_response :success
  end

  test "should get edit" do
    get edit_gamer_url(@gamer)
    assert_response :success
  end

  test "should update gamer" do
    patch gamer_url(@gamer), params: { gamer: { behavior_rating: @gamer.behavior_rating, communication_rating: @gamer.communication_rating, friend_rating: @gamer.friend_rating, overall_rating: @gamer.overall_rating, play_again_rating: @gamer.play_again_rating, psn_tag: @gamer.psn_tag, skill_rating: @gamer.skill_rating, steam_tag: @gamer.steam_tag, teammate_rating: @gamer.teammate_rating, username: @gamer.username, xbox_tag: @gamer.xbox_tag } }
    assert_redirected_to gamer_url(@gamer)
  end

  test "should destroy gamer" do
    assert_difference('Gamer.count', -1) do
      delete gamer_url(@gamer)
    end

    assert_redirected_to gamers_url
  end
end
