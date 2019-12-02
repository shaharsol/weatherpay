const {
  checkHotter,
  checkColder,
  checkRainy
} = require("./model");

const {extractDate} = require("./helpers");

const processItem = (city, item) => {
  const date = extractDate(item.dt);
  checkHotter(date,city,item.main.temp_max);
  checkColder(date,city,item.main.temp_min);
  checkRainy(date,city,item.weather[0].main);
}

const processCityForecast = (city, forecast) => {
  forecast.list.forEach(item => processItem(city, item));
}

module.exports = {
  processCityForecast,
}
