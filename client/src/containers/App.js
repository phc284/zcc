import React, { Component } from 'react';
import axios from 'axios';

import TableView from '../containers/TableView';
import Search from '../containers/Search';

import './App.css';

class App extends Component {
  state = {
    query: '',
    tracks: [],
    noResults: false
  };

  handleSearch = event => {
    event.preventDefault();

    //search for tracks with query
    axios.get(`/api/search/${this.state.query}`).then(data => {
      console.log('handleSearch data', data.data);
      const tracks = data.data;

      tracks.forEach((track, index) => {
        track.number = index + 1;
      });

      //set state of tracks to data from request
      this.setState({
        tracks
      });

      this.handleNoResults();
    });
  };

  handleNoResults = () => {
    if (this.state.tracks.length === 0) {
      this.setState({
        noResults: true
      });
    }

    setTimeout(
      () =>
        this.setState({
          noResults: false
        }),
      3500
    );
  };

  handleChange = event => {
    event.preventDefault();

    //set state to current value in input
    this.setState({
      query: event.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Search Tracks on Spotify</h1>
        <Search
          search={this.handleSearch}
          handleChange={this.handleChange}
          query={this.state.query}
          noResults={this.state.noResults}
        />
        {/*Filter?*/}
        <TableView tracks={this.state.tracks} />
      </div>
    );
  }
}

export default App;
