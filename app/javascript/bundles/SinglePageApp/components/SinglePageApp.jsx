import React from 'react';
import NewReview from '../../GamerProfile/components/NewReview';
import FindPlayer from '../../GamerProfile/components/FindPlayer';
import GamerProfile from '../../GamerProfile/components/GamerProfile';
import NavBar from '../../GamerProfile/components/NavBar';

export default class SinglePageApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            activePage: "home",
            targetUserId: 1,
            applicationPath: "home"
        };
        this.handleTargetUser = this.handleTargetUser.bind(this);
        this.handleProfilefromFind = this.handleProfilefromFind.bind(this);
        this.handleNewReview = this.handleNewReview.bind(this);
        this.handleBacktoProfile = this.handleBacktoProfile.bind(this);
        this.handleFindPlayer = this.handleFindPlayer.bind(this);
    }


    handleTargetUser(event){
        event.preventDefault();
        this.setState({targetUserId: event.target});

    }

    handleProfilefromFind(event){
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

    handleBacktoProfile(event){
        this.setState({activePage: "profile"})
    }

    render() {
        let activeTab;
        if (this.state.activePage == "home"){
            activeTab = ( <FindPlayer tabHandler={this.handleProfilefromFind}/> )
        }
        else if (this.state.activePage == "profile"){
            activeTab = ( <GamerProfile tabHandler={this.handleNewReview} targetId={this.state.targetUserId}/>)
        }
        else if (this.state.activePage == "review") {
            activeTab = ( <NewReview tabHandler={this.handleBacktoProfile} targetId={this.state.targetUserId}/> )
        }
        else {
            activeTab = ( <div>Else Case, somethings weird</div>)
        }

        return (
            <div className="singlePageApp">
                <NavBar tabHandler={this.handleFindPlayer}/>
                {activeTab}
            </div>
            );
    }
}