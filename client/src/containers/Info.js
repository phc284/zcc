import React, { Component } from 'react';
import axios from 'axios';

class Info extends Component {
  constructor() {
    super();

    this.state = {
      schedule: [],
      tstat: {}
    }
  }

  componentDidMount() {
    // axios.get('/api/schedule')
    //   .then(({data}) => {
    //     console.log(data);
    //     this.setState({
    //       schedule: data
    //     })
    //   })
    // axios.get('/api/teamstats2')
    //   .then(({data}) => {
    //     console.log(data);
    //     this.setState({
    //       tstat: data
    //     })
    //   })
  }

  renderSchedule() {
    return this.state.schedule.map((game, index) => {
      let awayScore = game.awayScore['#text'];
      let homeScore = game.homeScore['#text'];
      if (game.awayTeam.Abbreviation === 'DAL') {
        let temp = homeScore;
        homeScore = awayScore;
        awayScore = temp;
      }
      return (
        <div className="schedule-item" key={index}>
          <div>{game.awayTeam.Abbreviation}</div>
          <div>{awayScore}</div>
          <div>{game.homeTeam.Abbreviation}</div>
          <div>{homeScore}</div>
        </div>
      )
    })
  }

  render() {
    return (
      <div className="info">
        <div className="stat-container">
          <div className="team-stat">
            <div className="stat-item">
              <div>Total Passing Yards</div>
              <div>{this.state.tstat.TotalPassing}</div>
            </div>
            <div className="stat-item">
              <div>Total Rushing Yards</div>
              <div>{this.state.tstat.TotalRushing}</div>
            </div>
            <div className="stat-item">
              <div>Points Scored</div>
              <div>{this.state.tstat.TotalPointsFor}</div>
            </div>
            <div className="stat-item">
              <div>Points Allowed</div>
              <div>{this.state.tstat.TotalPointsAgainst}</div>
            </div>
          </div>
        </div>
        <div className="schedule-container">
          {this.renderSchedule()}
        </div>
      </div>
    );
  }
}

export default Info;
