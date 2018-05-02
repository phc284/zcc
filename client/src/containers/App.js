import React, { Component } from 'react';
import axios from 'axios';

import TableView from '../containers/TableView';
import Search from '../containers/Search';

import './App.css';

class App extends Component {
  state = {
    query: '',
    tracks: [],
    noResults: false,
    sorted: false,
    ascending: false,
    clicked: ''
  };

  handleSearch = event => {
    event.preventDefault();

    //search for tracks with query
    axios.get(`/api/search/${this.state.query}`).then(data => {
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

  handleSort = event => {
    //sort tracks by the category
    const sortParam = event.target.text.toLowerCase();
    let ascending = this.state.ascending;

    //if it's the first time being clicked, set it to ascending order
    if (this.state.sorted) {
      this.setState({
        ascending: true
      });
    }

    //compare function for sort function by category
    function compare(a, b) {
      if (sortParam === 'title') {
        a = a.name;
        b = b.name;
      } else if (sortParam === 'album') {
        a = a.album.name;
        b = b.album.name;
      } else if (sortParam === 'artists') {
        a = a.artists[0].name;
        b = b.artists[0].name;
      } else if (sortParam === 'popularity') {
        a = a.popularity;
        b = b.popularity;
      } else if (sortParam === '#') {
        a = a.number;
        b = b.number;
      }
      // if ascending is true (because first click), sort ascending
      if (ascending) {
        if (a < b) {
          return -1;
        } else if (a > b) {
          return 1;
        }
        return 0;
      } else {
        // else sort it descending
        if (a > b) {
          return -1;
        } else if (a < b) {
          return 1;
        }
        return 0;
      }
    }

    //immutable
    const tracks = this.state.tracks.slice();
    let sortedTracks = tracks.sort(compare);

    // if it was already ascending, set it to now descending
    if (this.state.ascending) {
      this.setState({
        ascending: false
      });
    }

    //set state to see which header was clicked
    this.setState({
      sorted: true,
      clicked: event.target.text,
      tracks: sortedTracks
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
        <TableView
          tracks={this.state.tracks}
          handleSort={this.handleSort}
          sorted={this.state.sorted}
          ascending={this.state.ascending}
          clicked={this.state.clicked}
        />
      </div>
    );
  }
}

export default App;
