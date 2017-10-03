class Review_Collection extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      skillScore: props.data.skill_score,
      teammateScore: props.data.teammate_score,
      communicationScore: props.data.communication_score,
      playAgain: props.data.play_again,
      comments: props.data.comments,
      game: props.data.game
    }
  }
  render() {
    return (    		
    	<div className="reviewData">
    		<ul id="scores-list">
				  <li><p className="btn btn-hg" id="score-icon">Skill<br/>{this.state.skillScore}</p></li>
				  <li><p className="btn btn-hg" id="score-icon">Team<br/>{this.state.teammateScore}</p></li>
				  <li><p className="btn btn-hg" id="score-icon">Smile<br/>{this.state.communicationScore}</p></li>
				  <li><p className="btn btn-hg" id="score-icon">Play<br/>{this.state.playAgain}</p></li>
          <li><p className="btn btn-hg" id="game-icon">Game<br/>{this.state.game}</p></li>
			 </ul> 
			<p id="comments">{this.props.data.comments}</p>
   		</div>
    )    
  }
}