import React from 'react';

export default class GamerReviews extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            skillScore: props.review.skill_score,
            teamScore: props.review.teammate_score,
            commScore: props.review.communication_score,
            behavScore: props.review.behavior_score,
            friendScore: props.review.friend_score,
            playScore: props.review.play_again_score,
            comments: props.review.comments,
            game: props.game
        };
    }

    render() {
        return (
            <div className="reviewData">
                <ul id="scores-list">
                    <li><p className="btn btn-hg" id="score-icon">Skill<br/>{this.state.skillScore}</p></li>
                    <li><p className="btn btn-hg" id="score-icon">Teammate<br/>{this.state.teamScore}</p></li>
                    <li><p className="btn btn-hg" id="score-icon">Communication<br/>{this.state.commScore}</p></li>
                    <li><p className="btn btn-hg" id="score-icon">Behavior<br/>{this.state.behavScore}</p></li>
                    <li><p className="btn btn-hg" id="score-icon">Friend<br/>{this.state.friendScore}</p></li>
                    <li><p className="btn btn-hg" id="score-icon">PlayAgain<br/>{this.state.playScore}</p></li>
                </ul>
            </div>
            );
    }
}