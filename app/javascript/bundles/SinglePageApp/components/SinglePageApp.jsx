import React from 'react';
import NewReview from '../../GamerProfile/components/NewReview';
import FindPlayer from '../../GamerProfile/components/FindPlayer';
import GamerProfile from '../../GamerProfile/components/GamerProfile';

export default class SinglePageApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            activePage: "home",
            targetUserId: 4
        };
        this.handleTargetUser = this.handleTargetUser.bind(this);
        this.handleGamerProfile = this.handleGamerProfile.bind(this);
        this.handleNewReview = this.handleNewReview.bind(this);
    }


    handleTargetUser(event){
        event.preventDefault();
        this.setState({targetUserId: event.target});

    }

    handleGamerProfile(event){
        this.setState({
            activePage: "profile",
            targetUserId: event.target.id
        })
    }
    handleNewReview(event){
        this.setState({activePage: "review"})
    }
    handleFindPlayer(event){
        this.setState({activePage: "home"})
    }

    render() {
        let activeTab;
        if (this.state.activePage == "home"){
            activeTab = ( <FindPlayer tabHandler={this.handleGamerProfile}/> )
        }
        else if (this.state.activePage == "profile"){
            activeTab = ( <GamerProfile tabHandler={this.handleNewReview} targetId={this.state.targetUserId}/>)
        }
        else if (this.state.activePage == "review") {
            activeTab = ( <NewReview tabHandler={this.handleFindPlayer} targetId={this.state.targetUserId}/> )
        }
        else {
            activeTab = ( <div>Else Case, somethings weird</div>)
        }

        return (
            <div className="singlePageApp">
                {activeTab}
            </div>
            );
    }
}