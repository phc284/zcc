import React from 'react';

const TeamListItem = ({ stats }) => {
  return (
    <div className="stat-list">
      <span>Team Stats</span>
      <div>Passing Yards</div>
      <div>{stats.Passing}</div>
      <div>Rushing Yards</div>
      <div>{stats.Rushing}</div>
      <div>Points Scored</div>
      <div>{stats.PointsFor}</div>
      <div>Points Allowed</div>
      <div>{stats.PointsAgainst}</div>
    </div>
  )
}

export default TeamListItem;
