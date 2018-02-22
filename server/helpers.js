const axios = require('axios');
const data = require('./data');


var MySportsFeeds = require("mysportsfeeds-node");
var msf = new MySportsFeeds("1.2", true);

const SPORTS_USERNAME = process.env.SPORTS_FEED_USERNAME;
const SPORTS_PASSWORD = process.env.SPORTS_FEED_PASSWORD;

msf.authenticate(SPORTS_USERNAME, SPORTS_PASSWORD);

const getNews = () => {
  var today = new Date();
  var dd = "0" + today.getDate();
  var mm = today.getMonth()+1 + "";
  var yyyy = today.getFullYear() + "";

  if (mm.length === 1) {
    mm = "0" + mm;
  }
  if (dd.length === 3) {
    dd = dd.slice(1, 3)
  }

  var url = 'https://newsapi.org/v2/everything?' +
            'q=dallas%20AND%20cowboys%20NOT%20(cheerleader%20ORnsfw)&' +
            `from=${yyyy}-${mm}-${dd-1}&` +
            'sortBy=relevancy&' +
            'language=en&' +
            `apiKey=${process.env.NEWS_API_KEY}`;

  return axios.get(url);
}

const getTwitterHandles = (res) => {
  return data.twitter_handles;
}


const getSchedule = () => {
  var query = `https://api.mysportsfeeds.com/v1.2/pull/nfl/2017-2018-regular/full_game_schedule.json?force=false`
  return msf.getData('nfl', '2017-2018-regular','team_gamelogs', 'json', {team: 'dal'});
}

const formatSchedule = (game) => {
  console.log(game.stats)
  var awayTeam = game.game.awayTeam['Abbreviation'];
  var awayScore = game.stats.PointsAgainst['#text'];
  var homeTeam = game.game.homeTeam['Abbreviation'];
  var homeScore = game.stats.PointsFor['#text'];
  var date = game.game.date;

  if (awayTeam === 'DAL') {
    var temp = awayScore;
    awayScore = homeScore;
    homeScore = temp;
  }

  var obj = {}
  obj.homeTeam = homeTeam
  obj.awayTeam = awayTeam;
  obj.homeScore = homeScore;
  obj.awayScore = awayScore;
  obj.date = date.slice(5);
  return obj;
}


const getTeamStats = () => {
  return msf.getData('nfl', '2017-2018-regular','overall_team_standings', 'json', {team: 'dal'});
}

const makeTeamStats = (obj) => {
  obj.Passing = data.stats.PassNetYards['#text'];
  obj.Rushing = data.stats.RushYards['#text'];
  obj.PointsFor = data.stats.PointsFor['#text'];
  obj.PointsAgainst = data.stats.PointsAgainst['#text'];
}

const makeOffenseStats = (obj) => {
  obj.Interceptions = data.stats.PointsAgainst['#text'];
  obj.PassAvg = data.stats.PointsAgainst['#text'];
}

const makeDefStats = (obj) => {

}

module.exports = {
  getNews,
  getTwitterHandles,
  getSchedule,
  formatSchedule,
  getTeamStats,
  makeOffenseStats,
  makeDefStats,
  makeTeamStats
}
