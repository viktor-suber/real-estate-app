const express = require('express');
const cors = require('cors');

const data = require('./data.json');

const server = express();
const port = 3001;

server.get('/api/homes', cors(), (req, res) => {
  res.json(data);
});

server.listen(port, () => {
  console.log(`Server listening at ${port}`);
});