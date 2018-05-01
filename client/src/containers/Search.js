import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Search.css';

class Search extends Component {
  render() {
    return (
      <form onSubmit={this.props.search}>
        <input
          type="text"
          onChange={this.props.handleChange}
          placeholder="Enter a song name"
          required
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

Search.propTypes = {};

export default Search;
