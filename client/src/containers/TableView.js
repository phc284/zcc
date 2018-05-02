import React, { Component } from 'react';
import TableThead from '../components/TableThead';
import TableBody from './TableBody';
import PropTypes from 'prop-types';

import './TableView.css';

export class TableView extends Component {
  state = {
    sorted: false,
    ascending: false,
    sortedTracks: []
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
    const tracks = this.props.tracks.slice();
    let sortedTracks = tracks.sort(compare);

    // if it was already ascending, set it to now descending
    if (this.state.ascending) {
      this.setState({
        ascending: false
      });
    }

    this.setState({
      sorted: true,
      sortedTracks
    });
  };

  render() {
    return (
      <div>
        <table className="table table-responsive table-hover">
          <TableThead sort={this.handleSort} />
          <TableBody
            tracks={
              this.state.sortedTracks.length
                ? this.state.sortedTracks
                : this.props.tracks
            }
          />
        </table>
      </div>
    );
  }
}

TableView.propTypes = {
  tracks: PropTypes.array
};

export default TableView;
