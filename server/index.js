const express = require('express');
const app = express();
require('dotenv').config({
  path: '../env.env'
});
const path = require('path');
const bodyParser = require('body-parser');
const axios = require('axios');
const helpers = require('./helpers');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/api/news', (req, res) => {
  helpers.getNews(res)
    .then((data) => {
      res.send(data.data.articles);
    })
});

app.get('/api/twitter', (req, res) => {
  var handles = helpers.getTwitterHandles();
  res.send(handles)
});


app.get('/api/schedule', (req, res) => {
  helpers.getSchedule()
    .then((result) => {
      var schedule = result.teamgamelogs.gamelogs.reduce((obj, game) => {
        obj.homeTeam = game.game.homeTeam
        obj.awayTeam = game.game.awayTeam;
        obj.homeScore = game.stats.PointsFor;
        obj.awayScore = game.stats.PointsAgainst;
        return obj;
      }, {});
      res.send(schedule)
    })
});


// app.get('/api/teamstats2', (req, res) => {
//   helpers.getTeamStats(res);
// });

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
if (!process.env.DEV) {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'../client/build/index.html'));
  });
}


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
