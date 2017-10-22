import React from 'react';

export default class FindPlayer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            searchValue: "",
            results: [],
            activeState: false
        };
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(event){
        event.preventDefault();
        this.setState({searchValue: event.target.value});
        var search = this.state.searchValue;
        $.ajax({
            url: '/static/search',
            type: 'POST',
            data: {searchData: search}
        })
        .done((searchResponse) => {
                this.setState({
                    results: searchResponse.results,
                });
        });
    }

    render() {
        return (
            <div className="findBlock">
                <div className="searchBar" onChange={this.handleSearch}>
                    <input type="text" value={this.state.value} rows="60" placeholder="Find a player..."/>
                </div>
                <div className="resultBox">
                    <ul id="results-list">
                    {this.state.results.map((gamer) => {
                        return <li> {gamer.username} </li>
                    })}
                    </ul>
                </div>
            </div>
            );
    }
}