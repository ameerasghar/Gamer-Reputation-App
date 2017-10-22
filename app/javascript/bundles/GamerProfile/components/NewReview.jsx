import React from 'react';

export default class NewReview extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            skillScore: 10,
            teamScore: 10,
            commScore: 10,
            playScore: 10,
            behavScore: 10,
            friendScore: 10,
            game: "",
            target_id: props.target.id,
            comments: ""
        }
        this.updateGame = this.updateGame.bind(this);
        this.updateSkill = this.updateSkill.bind(this);
        this.updateTeam = this.updateTeam.bind(this);
        this.updateComm = this.updateComm.bind(this);
        this.updateBehav = this.updateBehav.bind(this);
        this.updateFriend = this.updateFriend.bind(this);
        this.updatePlay = this.updatePlay.bind(this);
        this.updateComments = this.updateComments.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateGame(event){
        event.preventDefault();
        this.setState({game: event.target.value})
    }

    updateSkill(event){
        event.preventDefault();
        this.setState({skillScore: event.target.value});

    }
    updateTeam(event){
        event.preventDefault();
        this.setState({teamScore: event.target.value});
    }
    updateComm(event){
        event.preventDefault();
        this.setState({commScore: event.target.value});
    }
    updateBehav(event){
        event.preventDefault();
        this.setState({behavScore: event.target.value});
    }
    updateFriend(event){
        event.preventDefault();
        this.setState({friendScore: event.target.value});
    }
    updatePlay(event){
        event.preventDefault();
        this.setState({playScore: event.target.value});
    }

    updateComments(event){
        event.preventDefault();
        this.setState({comments: event.target.value})
    }

    handleSubmit(event){
        event.preventDefault();
        var skill = this.state.skillScore;
        var team = this.state.teamScore;
        var comm = this.state.commScore;
        var play = this.state.playScore;
        var behav = this.state.behavScore;
        var friend = this.state.friendScore;
        var comments = this.state.comments;
        var target = this.state.target_id;
        var game = this.state.game;
         $.ajax({
            url: '/reviews',
            method: 'POST',
            data: {review: {skill_score: skill, teammate_score: team, communication_score: comm, play_again_score: play, behavior_score: behav, friend_score: friend,  comments: comments, target_id: 1, game: game}}
        }).done((response) => {
         })

    }

    render() {
        return (
            <form className="form-block" onSubmit={this.handleSubmit}>
            <h1> Review For insert username here</h1>
                <div className="form-slot">
                    <div id="label">What game did you play?</div>
                    <input type="text" onChange={this.updateGame}className="form-input"/>
                </div>
                <div className="form-slot">
                    This player... <br/>
                    <select value={this.state.skillScore} onChange={this.updateSkill}>
                        <option value="10">is one of the highest skilled players I have ever played with</option>
                        <option value="8">Is not the best player I have played with, but is still quite skilled</option>
                        <option value="5">is pretty average skill wise</option>
                        <option value="3">shows some promise, but is really more of a beginner</option>
                    </select>
                </div>
                <div className="form-slot">
                    This player... <br/>
                    <select value={this.state.teamScore} onChange={this.updateTeam}>
                        <option value="10">was a leader on our team and helped bring out the best of the team</option>
                        <option value="8">was an integral member of the team and made significant contributions</option>
                        <option value="5">shows promise of good teamwork but lacks consistency</option>
                        <option value="3">was not a positive contributor to the team</option>
                    </select>
                </div>
                <div className="form-slot">
                    This player... <br/>
                    <select value={this.state.commScore} onChange={this.updateComm}>
                        <option value="10">was active on communictions and helped coordinte the team</option>
                        <option value="8">could have been more active but still listened to the team</option>
                        <option value="5">did not communicate, but was not expected to.</option>
                        <option value="3">did not communicate, and was expected to</option>
                        <option value="1">purposely made communication difficult (ignored, mic spam)</option>
                    </select>
                </div>
                <div className="form-slot">
                    This player... <br/>
                    <select value={this.state.behavScore} onChange={this.updateBehav}>
                        <option value="10">was friendly and positive to others</option>
                        <option value="1">was negative and rude to other players</option>
                        <option value="5">was neutral to other players</option>
                    </select>
                </div>
                <div className="form-slot">
                    This player... <br/>
                    <select value={this.state.friendScore} onChange={this.updateFriend}>
                        <option value="10">was already my friend before</option>
                        <option value="10">is my friend because of this game</option>
                        <option value="1">is not my friend</option>
                    </select>
                </div>
                <div className="form-slot">
                    I would... <br/>
                    <select value={this.state.playScore} onChange={this.updatePlay}>
                        <option value="1">not play with this person again</option>
                        <option value="10">play with this person again</option>
                    </select>
                </div>
                <div className="form-slot">
                    <textarea name="comment" rows="4" cols="40" onChange={this.updateComments} placeholder="Tell us more about this player..."></textarea>
                </div><br/>
                <input id="submit" type="submit"/>
            </form>
            );
    }
}