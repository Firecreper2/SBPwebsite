//const PORT = 5500
const web = './static/web.html'
const express = require("express");
const fs = require('fs')
const site = '/static/index.html'

const app = express();
app.use(express.static('static'))

app.get('/', function(req, res)  {
  res.sendFile(__dirname + site);
});


app.listen(process.env.PORT, () => {
  console.log(`Serving ${web} on port ${process.env.PORT} at localhost`);
  saveFile()
});