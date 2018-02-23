import React from 'react';

const STListItem = ({ stats }) => {
  console.log(stats)
  return (
    <div className="stat-list">
      <span>Special Team Stats</span>
      <div>FG %</div>
      <div>{stats.FgPct}</div>
      <div>XP %</div>
      <div>{stats.XpPct}</div>
      <div>Kickoff Return Avg (yds)</div>
      <div>{stats.KoRetAvgYds}</div>
      <div>Kick Return Avg (yds)</div>
      <div>{stats.KrAvg}</div>
      <div>Punt Avg (yds)</div>
      <div>{stats.PuntAvg}</div>
      <div>Punt Return Avg (yds)</div>
      <div>{stats.PrAvg}</div>
    </div>
  )
}

export default STListItem;
