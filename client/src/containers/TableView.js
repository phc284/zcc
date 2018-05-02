import React, { Component } from 'react';
import TableThead from '../components/TableThead';
import TableBody from './TableBody';
import PropTypes from 'prop-types';

import './TableView.css';

export class TableView extends Component {
  render() {
    return (
      <div>
        <table className="table table-responsive-md table-hover">
          <TableThead
            sort={this.props.handleSort}
            sorted={this.props.sorted}
            ascending={this.props.ascending}
            clicked={this.props.clicked}
          />
          <TableBody tracks={this.props.tracks} />
        </table>
      </div>
    );
  }
}

TableView.propTypes = {
  tracks: PropTypes.array
};

export default TableView;
