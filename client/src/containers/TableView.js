import React, { Component } from 'react';
import TableThread from '../components/TableThread';
import TableBody from './TableBody';
import PropTypes from 'prop-types';

import './TableView.css';

export class TableView extends Component {
  static propTypes = {};

  render() {
    return (
      <table className="table">
        <TableThread />
        <TableBody />
      </table>
    );
  }
}

export default TableView;
