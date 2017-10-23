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
                <div> LOGO </div>
                <div> letsPlay </div>
                <div onClick={this.props.tabHandler}> Link to Find Player </div>
            </ul>
            );
    }
}