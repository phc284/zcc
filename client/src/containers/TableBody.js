import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TableRow from '../components/TableRow';

export class TableBody extends Component {
  render() {
    const { tracks } = this.props;
    return (
      <tbody>
        {tracks.length
          ? tracks.map((track, index) => {
              return (
                <TableRow key={track.id} number={track.number} track={track} />
              );
            })
          : null}
      </tbody>
    );
  }
}

TableBody.propTypes = {
  tracks: PropTypes.array
};

export default TableBody;
