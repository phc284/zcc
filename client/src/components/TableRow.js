import React from 'react';
import PropTypes from 'prop-types';

const TableRow = props => {
  const {
    number,
    album,
    artists,
    name,
    popularity,
    external_urls
  } = props.track;

  const formatArtists = artists.map((artist, index) => {
    return (
      <span key={index}>
        <a href={artist.external_urls.spotify} target="_blank">
          {artist.name}
        </a>
        {index === artists.length - 1 ? '' : ', '}
      </span>
    );
  });

  return (
    <tr>
      <th scope="row">{number}</th>
      <td>
        <a href={external_urls.spotify} target="_blank">
          {name}
        </a>
      </td>
      <td>
        <a href={album.external_urls.spotify} target="_blank">
          {album.name}
        </a>
      </td>
      <td>{formatArtists}</td>
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
