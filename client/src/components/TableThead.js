import React from 'react';

import sortUp from '../assets/sort-up.png';
import sortDown from '../assets/sort-down.png';
import './TableThead.css';

const SortImage = (sorted, ascending) => {
  if (sorted && ascending) {
    return <img src={sortUp} alt="up" />;
  } else if (!ascending) {
    return <img src={sortDown} alt="down" />;
  } else {
    return null;
  }
};

const TableThread = props => {
  const handleSort = props.sort;
  const { ascending, sorted, clicked } = props;

  return (
    <thead>
      <tr>
        <th scope="col">
          <a onClick={handleSort}>#</a>
          {clicked === '#' ? SortImage(sorted, ascending) : null}
        </th>
        <th scope="col">
          <a onClick={handleSort}>Title</a>
          {clicked === 'Title' ? SortImage(sorted, ascending) : null}
        </th>
        <th scope="col">
          <a onClick={handleSort}>Album</a>
          {clicked === 'Album' ? SortImage(sorted, ascending) : null}
        </th>
        <th scope="col">
          <a onClick={handleSort}>Artists</a>
          {clicked === 'Artists' ? SortImage(sorted, ascending) : null}
        </th>
        <th scope="col">
          <a onClick={handleSort}>Popularity</a>
          {clicked === 'Popularity' ? SortImage(sorted, ascending) : null}
        </th>
      </tr>
    </thead>
  );
};

export default TableThread;
