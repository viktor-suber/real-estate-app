const express = require('express');
const cors = require('cors');

const data = require('./data.json');

const server = express();
const port = 3001;

const getMinMaxData = (data) => {
  const minMaxData = {
    minPrice: 0,
    maxPrice: 0,
    minBedrooms: 0,
    maxBedrooms: 0
  };

  minMaxData.minPrice = Math.min.apply(Math, data.map((home) => home.price));
  minMaxData.maxPrice = Math.max.apply(Math, data.map((home) => home.price));
  minMaxData.minBedrooms = Math.min.apply(Math, data.map((home) => home.property.numberBedrooms));
  minMaxData.maxBedrooms = Math.max.apply(Math, data.map((home) => home.property.numberBedrooms));

  return minMaxData;
};

server.get('/api/homes', cors(), (req, res) => {
  res.json({minMaxData: getMinMaxData(data), data: data});
});

server.listen(port, () => {
  console.log(`Server listening at ${port}`);
});