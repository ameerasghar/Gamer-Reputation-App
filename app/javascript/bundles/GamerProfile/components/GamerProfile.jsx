import React from 'react';

export default class GamerProfile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id: "",
            username: "",
            xboxTag: "",
            psnTag: "",
            steamTag: "",
            skillScore: 0,
            teamScore: 0,
            commScore: 0,
            playScore: 0,
            friendScore: 0,
            behavScore: 0,
            overallScore: 0,
            reviews: []
        };
    }
                                                                                                                                            
    componentDidMount(){
        $.ajax({
            url: '/gamers/1',
            type: 'GET' 
        })
        .done((gamerResponse) => {
            this.setState({
                id: gamerResponse.gamer.id,
                username: gamerResponse.gamer.username,
                xboxTag: gamerResponse.gamer.xbox_tag,
                psnTag: gamerResponse.gamer.psn_tag,
                steamTag: gamerResponse.gamer.steam_tag,
                skillScore: gamerResponse.gamer.skill_rating,
                teamScore: gamerResponse.gamer.teammate_rating,
                commScore: gamerResponse.gamer.communication_rating,
                playScore: gamerResponse.gamer.play_again_rating,
                friendScore: gamerResponse.gamer.friend_rating,
                behavScore: gamerResponse.gamer.behavior_rating,
                overallScore: gamerResponse.gamer.overall_rating,
                reviews: gamerResponse.reviews
            });
        });
    }

    render() {
        return (
        <div className="page">
            <div className="profileBlock">
                <h1 id="username">{this.state.username}</h1>
                <p className="scoreBlock" id="overall-score">{this.state.overallScore.toFixed(2)}</p>
                <p className="scoreBlock" id="score-slot1">{this.state.skillScore.toFixed(2) * 10} %</p>
                <p className="scoreBlock" id="score-slot2">{this.state.teamScore.toFixed(2) * 10} %</p>
                <p className="scoreBlock" id="score-slot3">{this.state.commScore.toFixed(2) * 10} %</p>
                <p className="scoreBlock" id="score-slot4">{this.state.playScore.toFixed(2) * 10} %</p>
                <p className="scoreBlock" id="score-slot5">{this.state.friendScore.toFixed(2) * 10} %</p>
                <p className="scoreBlock" id="score-slot6">{this.state.behavScore.toFixed(1) * 10} %</p>
                <a className="scoreBlock" href="../reviews/new" id="review-button">Write a Review</a>
                <div className="tags">
                    <div>Xbox ID: {this.state.xboxTag} </div>
                    <div>PSN ID: {this.state.psnTag}</div>
                    <div>Steam ID: {this.state.steamTag}</div>
                </div>
            </div>
        </div>
        );
    }

}