import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TableBody extends Component {
  static propTypes = {};

  render() {
    return (
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    );
  }
}

export default TableBody;
