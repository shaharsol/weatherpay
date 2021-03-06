const {
  checkHotter,
  checkColder,
  checkRainy,
} = require('./model');

const { extractDate } = require('./helpers');

const extractForecasts = (responses) => responses.map((response) => response.data);

const addCityNameToForecasts = (forecasts) => forecasts.map((forecast) => forecast.list.map((item) => {
  item.city = forecast.city.name;
  return item;
}));

const flattenForecasts = (forecasts) => forecasts.reduce((acc, item) => acc.concat(item), []);

const reduceForecasts = (forecasts) => forecasts.reduce((acc, item) => {
  const date = extractDate(item.dt);
  acc = checkHotter(acc, date, item.city, item.main.temp_max);
  acc = checkColder(acc, date, item.city, item.main.temp_min);
  acc = checkRainy(acc, date, item.city, item.weather[0].main);
  return acc;
}, {});

module.exports = {
  extractForecasts,
  addCityNameToForecasts,
  flattenForecasts,
  reduceForecasts,
};
