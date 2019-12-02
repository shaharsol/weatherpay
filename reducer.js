const {
  checkHotter,
  checkColder,
  checkRainy,
} = require('./model');

const { extractDate } = require('./helpers');

const addCityNameToForecasts = (forecasts) => {
  const result = forecasts.map((forecast) => forecast.list.map((item) => {
    item.city = forecast.city.name;
    return item;
  }));
  return result;
};

const flattenForecasts = (forecasts) => {
  const reduced = forecasts.reduce((data, item) => data.concat(item), []);
  return reduced;
};

const reduceForecasts = (forecasts) => {
  const reduced = forecasts.reduce((data, item) => {
    const date = extractDate(item.dt);
    data = checkHotter(data, date, item.city, item.main.temp_max);
    data = checkColder(data, date, item.city, item.main.temp_min);
    data = checkRainy(data, date, item.city, item.weather[0].main);
    return data;
  }, {});
  return reduced;
};

module.exports = {
  addCityNameToForecasts,
  flattenForecasts,
  reduceForecasts,
};
