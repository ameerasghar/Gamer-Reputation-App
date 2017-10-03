class Profile extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			skillScore: props.data.skill_rating,
      		teammateScore: props.data.team_rating,
      		communicationScore: props.data.communication_rating,
      		playAgain: props.data.play_again_rating,
      		weightedScore: props.data.total_computed_score
		}
	}
  render() {
    return (
    	<div className="profileBlock">
    		<h1 id="username">{this.props.data.username}</h1>
    		<p className="scoreBlock" id="weighted-score">{this.state.weightedScore * 100}</p>
    		<p className="scoreBlock" id="skill-score">{this.state.skillScore * 100}%</p>
    		<p className="scoreBlock" id="team-score">{this.state.teammateScore * 100}%</p>
    		<p className="scoreBlock" id="comm-score">{this.state.communicationScore * 100}%</p>
    		<p className="scoreBlock" id="play-score">{this.state.playAgain  * 100}%</p>
    		<a className="scoreBlock" href="../reviews/new" id="review-button">Write a Review</a>
	    	<div className="tags">
	    		<div>Xbox ID: {this.props.data.xbox_tag}</div>
	    		<div>PSN ID: {this.props.data.psn_tag}</div>
	    		<div>Steam ID: {this.props.data.steam_tag}</div>
	    	</div>
    	</div>
    	)    
  }
}