const express = require('express');
const app = express();
require('dotenv').config({
  path: './env.env'
});
const path = require('path');
const bodyParser = require('body-parser');
const axios = require('axios');
const SpotifyWebApi = require('spotify-web-api-node');

const routes = require('./routes.js');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../client/build')));

app.use('/api', routes);

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
if (!process.env.DEV) {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '../client/build/index.html'));
  });
}

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server Listening on port ${port}`));
