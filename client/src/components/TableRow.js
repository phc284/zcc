import React from 'react';
import PropTypes from 'prop-types';

const TableRow = props => {
  const { number, album, artists, id, name, popularity } = props.track;

  // format artists into a string from incoming array
  const formatArtist = artists
    .map(artist => {
      return artist.name;
    })
    .join(', ');

  return (
    <tr>
      <th scope="row">{props.number}</th>
      <td>{name}</td>
      <td>{formatArtist}</td>
      <td>{album.name}</td>
    </tr>
  );
};

TableRow.propTypes = {
  track: PropTypes.object
};

export default TableRow;
