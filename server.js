const express = require('express');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//On the server this will serve up our build folder as static files
app.use(express.static(path.join(__dirname, './client/build')))

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello' });
});


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
