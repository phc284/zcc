import React from 'react';

import './TableThead.css';

const TableThread = props => {
  const handleSort = props.sort;
  return (
    <thead>
      <tr>
        <th scope="col">
          <a onClick={handleSort}>#</a>
        </th>
        <th scope="col">
          <a onClick={handleSort}>Title</a>
        </th>
        <th scope="col">
          <a onClick={handleSort}>Album</a>
        </th>
        <th scope="col">
          <a onClick={handleSort}>Artists</a>
        </th>
        <th scope="col">
          <a onClick={handleSort}>Popularity</a>
        </th>
      </tr>
    </thead>
  );
};

export default TableThread;
