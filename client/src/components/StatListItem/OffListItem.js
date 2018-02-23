import React from 'react';

const OffListItem = ({ stats }) => {
  return (
    <div className="stat-list">
      <span>Offense Stats</span>
      <div>Passing TD</div>
      <div>{stats.PassTD}</div>
      <div>Rushing TD</div>
      <div>{stats.RushTD}</div>
      <div>Passing %</div>
      <div>{stats.PassPct}</div>
      <div>Pass INT</div>
      <div>{stats.PassInt}</div>
      <div>Passing Avg (yds)</div>
      <div>{stats.PassAvg}</div>
      <div>3rd Down Conv</div>
      <div>{stats.ThirdDownsPct}</div>
    </div>
  )
}

export default OffListItem;
