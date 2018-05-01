const express = require('express');
const SpotifyWebApi = require('spotify-web-api-node');

const router = express.Router();

const trackData = require('./fakeData.json');

var spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_ID,
  clientSecret: process.env.SPOTIFY_SECRET
});

// Retrieve an access token.
// spotifyApi.clientCredentialsGrant().then(
//   function(data) {
//     console.log('The access token expires in ' + data.body['expires_in']);
//     console.log('The access token is ' + data.body['access_token']);

//     // Save the access token so that it's used in future calls
//     spotifyApi.setAccessToken(data.body['access_token']);
//   },
//   function(err) {
//     console.log('Something went wrong when retrieving an access token', err);
//   }
// );

router.get('/search/:query', (req, res) => {
  //use fake data to not use up requests
  res.send(trackData.tracks.items);

  // const { query } = req.params;
  // spotifyApi.searchTracks(query).then(
  //   function(data) {
  //     // console.log('Search tracks by "Love" in the song name', data.body);
  //     res.send(data.body);
  //   },
  //   function(err) {
  //     console.log('Something went wrong!', err);
  //   }
  //);
});

module.exports = router;
