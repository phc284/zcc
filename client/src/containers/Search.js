import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Search.css';

class Search extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.search}>
          <input
            type="text"
            onChange={this.props.handleChange}
            placeholder="Enter a Song Name"
            required
          />
          <button type="submit">Submit</button>
        </form>
        {this.props.noResults ? <span>No results were found</span> : ''}
      </div>
    );
  }
}

Search.propTypes = {
  search: PropTypes.func,
  handleChange: PropTypes.func,
  query: PropTypes.string
};

export default Search;
