require 'test_helper'

class ReviewsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @review = reviews(:one)
  end

  test "should get index" do
    get reviews_url
    assert_response :success
  end

  test "should get new" do
    get new_review_url
    assert_response :success
  end

  test "should create review" do
    assert_difference('Review.count') do
      post reviews_url, params: { review: { comments: @review.comments, communication_score: @review.communication_score, game_id: @review.game_id, play_again: @review.play_again, skill_score: @review.skill_score, target_id: @review.target_id, teammate_score: @review.teammate_score } }
    end

    assert_redirected_to review_url(Review.last)
  end

  test "should show review" do
    get review_url(@review)
    assert_response :success
  end

  test "should get edit" do
    get edit_review_url(@review)
    assert_response :success
  end

  test "should update review" do
    patch review_url(@review), params: { review: { comments: @review.comments, communication_score: @review.communication_score, game_id: @review.game_id, play_again: @review.play_again, skill_score: @review.skill_score, target_id: @review.target_id, teammate_score: @review.teammate_score } }
    assert_redirected_to review_url(@review)
  end

  test "should destroy review" do
    assert_difference('Review.count', -1) do
      delete review_url(@review)
    end

    assert_redirected_to reviews_url
  end
end
