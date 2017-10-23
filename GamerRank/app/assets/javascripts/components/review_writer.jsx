class Review_Writer extends React.Component{
	constructor(props){
    	super(props);
    	this.scoreSlider = this.scoreSlider.bind(this);
    	this.teamSlider = this.teamSlider.bind(this);
    	this.commSlider = this.commSlider.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
    	this.playAgainSlider = this.playAgainSlider.bind(this);
    	this.updateComments = this.updateComments.bind(this);
    	this.updateGame = this.updateGame.bind(this);
      	this.state ={
      		skill_score: 1,
      		teammate_score: 1,
      		communication_score: 1,
      		play_again: 1,
      		comments: "",
      		target_id: props.data.target_id,
            target_username: props.data.target_username,
      		game: ""
    	};
    }

    scoreSlider(event){
    	event.preventDefault();
    	this.setState({skill_score: event.target.value});
    }
    teamSlider(event){
    	event.preventDefault();
    	this.setState({teammate_score: event.target.value});
    }
    commSlider(event){
    	event.preventDefault();
    	this.setState({communication_score: event.target.value});
    }

    playAgainSlider(event){
        event.preventDefault();
    	this.setState({play_again: event.target.value});
    }

    updateComments(event){
    	event.preventDefault();
    	this.setState({comments: event.target.value})
    }

    updateGame(event){
    	event.preventDefault();
    	this.setState({game: event.target.value})
    }

    handleSubmit(event){
    	event.preventDefault();
    	skill = this.state.skill_score;
    	team = this.state.teammate_score;
    	comm = this.state.communication_score;
    	play = this.state.play_again;
    	comments = this.state.comments;
    	target = this.state.target_id;
    	game = this.state.game;
    	debugger;
    	 $.ajax({
    		url: '/reviews',
    		method: 'POST',
    		data: {review: {skill_score: skill, teammate_score: team, communication_score: comm, play_again: play, comments: comments, target_id: 1, game: game}}
    	}).done((response) => {
    		this.setState({
    			skill_score: 1,
      			teammate_score: 1,
      			communication_score: 1,
      			play_again: false,
      			comments: "",
      			target: "",
      			game: ""
            });
    	 })

    }

	render() {
		return(
			<form className="form-block" onSubmit={this.handleSubmit}>
            <h1> Review For {this.state.target_username} </h1>
				<div className="form-slot">
					<div id="label">What game did you play?</div>
					<input type="text" onChange={this.updateGame}className="form-input"/>
				</div>
				<div className="form-slot">
					<div id="label">On a scale of 1 to 10 rank how skilled this player is</div>
                    <div id="score-value">{this.state.skill_score}</div>
					<input type="range" id="slider" defaultValue="1" onChange={this.scoreSlider} min="1" max="10" step="0.1"className="form-input"/>
				</div>
				<div className="form-slot">
					<div id="label">On a scale of 1 to 10 rank how good of a teammate this player is</div>
                    <div id="score-value">{this.state.teammate_score}</div>
					<input type="range" id="slider" defaultValue="1" onChange={this.teamSlider} min="1" max="10" step="0.1" className="form-input"/>
				</div>
				<div className="form-slot">
					<div id="label">On a scale of 1 to 10 rank the behavior of this player</div>
                    <div id="score-value">{this.state.communication_score}</div>
					<input type="range" id="slider" defaultValue="1" onChange={this.commSlider} min="1" max="10" step="0.1" className="form-input"/>
				</div>
                <div className="form-slot">
                    <div id="label">How likely are you to play with this player again?</div>
                    <div id="score-value">{this.state.play_again}</div>
                    <input type="range" id="slider" defaultValue="1" onChange={this.playAgainSlider} min="1" max="10" step="0.1" className="form-input"/>
                </div>
				<div className="form-slot">
					<div id="label">Please write a comment:</div>
					<textarea name="comment" rows="4" cols="40" onChange={this.updateComments} placeholder="Tell us more about this player..."></textarea>
				</div><br/>
				<input id="submit" type="submit"/>
			</form>
			)
	}
}