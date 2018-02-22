import React from 'react';

const ScheduleItem = ({ game }) => {
  let awayTeam = game.awayTeam;
  let awayScore = game.awayScore;
  let homeTeam = game.homeTeam;
  let homeScore = game.homeScore;
  let date = game.date;


  return (
    <div className="schedule-item">
      <div className="schedule-date">{date}</div>
      <div>{awayTeam}</div>
      <div>{awayScore}</div>
      <div>{homeTeam}</div>
      <div>{homeScore}</div>
    </div>
  )
}

export default ScheduleItem;
