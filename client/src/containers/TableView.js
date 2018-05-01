import React, { Component } from 'react';
import TableThread from '../components/TableThread';
import TableBody from './TableBody';
import PropTypes from 'prop-types';

import './TableView.css';

export class TableView extends Component {
  render() {
    return (
      <table className="table">
        <TableThread />
        <TableBody tracks={this.props.tracks} />
      </table>
    );
  }
}

TableView.propTypes = {
  tracks: PropTypes.array
};

export default TableView;
