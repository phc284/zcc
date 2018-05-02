const express = require('express');
const SpotifyWebApi = require('spotify-web-api-node');

const router = express.Router();

var spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_ID,
  clientSecret: process.env.SPOTIFY_SECRET
});

// Retrieve an access token.
spotifyApi.clientCredentialsGrant().then(
  function(data) {
    console.log('The access token expires in ' + data.body['expires_in']);
    console.log('The access token is ' + data.body['access_token']);

    // Save the access token so that it's used in future calls
    spotifyApi.setAccessToken(data.body['access_token']);
  },
  function(err) {
    console.log('Something went wrong when retrieving an access token', err);
  }
);

router.get('/search/:query', (req, res) => {
  const query = `track:${req.params.query}`;
  spotifyApi.searchTracks(query, { limit: 35 }).then(
    function(data) {
      res.send(data.body.tracks.items);
    },
    function(err) {
      console.log('Something went wrong!', err);
    }
  );
});

module.exports = router;
