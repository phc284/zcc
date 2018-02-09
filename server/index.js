const express = require('express');
const app = express();
require('dotenv').config({
  path: '../env.env'
});
const path = require('path');
const bodyParser = require('body-parser');
const axios = require('axios');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//On the server this will serve up our build folder as static files
app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/news', (req, res) => {
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
            'q=dallas%20cowboys&' +
            `from=${yyyy}-${mm}-${dd}&` +
            'sortBy=relevancy&' +
            `apiKey=${process.env.NEWS_API_KEY}`;

  axios.get(url)
    .then((data) => {
      res.send(data.data.articles.slice(0, 11));
    })

});


console.log(process.env.NEWS_API_KEY)

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
if (!process.env.DEV) {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'../client/build/index.html'));
  });
}


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
