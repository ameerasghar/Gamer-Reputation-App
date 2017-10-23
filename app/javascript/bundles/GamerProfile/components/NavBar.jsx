import React from 'react';

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <ul className="navBar">
                <a onClick={this.props.tabHandler}> Find a Player </a>
                <div id="version-info"> GamerRep Demo Build 0.7 </div>
                <div id="version-info"> created by Ben Behrman </div>
            </ul>
            );
    }
}