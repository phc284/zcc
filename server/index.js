const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//On the server this will serve up our build folder as static files
app.use(express.static(path.join(__dirname, '../client/build')))

app.get('/hello', (req, res) => {
  res.send({ express: 'Hello' });
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
if (!process.env.DEV) {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });
}


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
