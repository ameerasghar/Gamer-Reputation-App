import React from 'react';

export default class GamerReviews extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            skillScore: props.skill_score,
            teamScore: props.team_score,
            commScore: props.comm_score,
            behavScore: props.behav_score,
            friendScore: props.friend_score,
            playScore: props.play_score,
            comments: props.comments,
            game: props.game
        };
    }

    render() {
        return (
            <div className="reviewData">
                <ul id="scores-list">
                    <li><p className="btn btn-hg" id="score-ison">Skill<br/>{this.state.skillScore}</p></li>
                    <li><p className="btn btn-hg" id="score-icon">Team<br/>{this.state.teamScore}</p></li>
                    <li><p className="btn btn-hg" id="score-icon">Comm<br/>{this.state.commScore}</p></li>
                    <li><p className="btn btn-hg" id="score-icon">Behav<br/>{this.state.behavScore}</p></li>
                    <li><p className="btn btn-hg" id="score-icon">Friend<br/>{this.state.friendScore}</p></li>
                    <li><p className="btn btn-hg" id="score-icon">Play<br/>{this.state.playScore}</p></li>
                </ul>
                <p id="comments">{this.state.comments}</p>
            </div>
            );
    }
}