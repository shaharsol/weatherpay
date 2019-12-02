const axios = require('axios');
const config = require('config');

const getCityForecast = (city) => axios.get('http://api.openweathermap.org/data/2.5/forecast', {
  params: {
    q: city,
    units: config.get('openweathermap.units'),
    APPID: config.get('openweathermap.api_key'),
  },
});

module.exports = {
  getCityForecast,
};
