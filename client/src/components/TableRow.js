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

  console.log('popularity', popularity.toString());

  return (
    <tr>
      <th scope="row">{props.number}</th>
      <td>{name}</td>
      <td>{album.name}</td>
      <td>{formatArtist}</td>
      <td>
        <progress value={popularity.toString()} max="100" />
      </td>
    </tr>
  );
};

TableRow.propTypes = {
  track: PropTypes.object
};

export default TableRow;
