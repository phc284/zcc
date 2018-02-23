import React from 'react';

const DefListItem = ({ stats }) => {
  return (
    <div className="stat-list">
      <span>Defense Stats</span>
      <div>Interceptions</div>
      <div>{stats.Interceptions}</div>
      <div>Sacks</div>
      <div>{stats.Sacks}</div>
      <div>Fumbles Forced</div>
      <div>{stats.FumForced}</div>
      <div>Tackles For Loss</div>
      <div>{stats.TacklesForLoss}</div>
      <div>Passes Defended</div>
      <div>{stats.PassesDefended}</div>
    </div>
  )
}

export default DefListItem;
