import React from 'react';


export default class SearchResult extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: props.gamer.username,
            id: props.gamer.id
        };

    }
    render() {
        return (
            <div className="searchResult">
                <div id={this.state.id} onClick={this.props.tabHandler}>{this.state.username}</div>
            </div>
            );
    }
}