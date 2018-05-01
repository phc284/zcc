import React, { Component } from 'react';
import axios from 'axios';

import TableView from '../containers/TableView';
import Search from '../containers/Search';

import './App.css';

class App extends Component {
  state = {
    query: '',
    tracks: []
  };

  handleSearch = event => {
    event.preventDefault();
    console.log(this.state.query);
    axios.get(`/api/search/${this.state.query}`).then(data => {
      console.log('handleSearch data', data.data);
      const tracks = data.data;

      //set state of tracks to data from request
      this.setState({
        tracks
      });
    });
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
        <Search
          search={this.handleSearch}
          handleChange={this.handleChange}
          query={this.state.query}
        />
        {/*Filter?*/}
        <TableView />
      </div>
    );
  }
}

export default App;
