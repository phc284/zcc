const axios = require('axios');
const data = require('./data')

const getNews = (res) => {
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
      res.send(data.data.articles.slice(0, 14));
    })
}

const getTwitterHandles = (res) => {
  res.send(data.twitter_handles);
}

module.exports = {
  getNews,
  getTwitterHandles
}
