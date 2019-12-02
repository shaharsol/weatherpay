const {
  checkHotter,
  checkColder,
  checkRainy,
} = require('./model');

const { extractDate } = require('./helpers');

const processItem = (city, item) => {
  const date = extractDate(item.dt);
  checkHotter(date, city, item.main.temp_max);
  checkColder(date, city, item.main.temp_min);
  checkRainy(date, city, item.weather[0].main);
};

const processCityForecast = (city, forecast) => {
  forecast.list.forEach((item) => processItem(city, item));
};

const addCityNameToForecasts = (forecasts) => {
  const result = forecasts.map((forecast) => forecast.list.map((item) => {
    const newItem = item;
    newItem.city = forecast.city.name;
    return newItem;
  }));
  return result;
};

const flattenForecasts = (forecasts) => {
  const reduced = forecasts.reduce((data, item) => data.concat(item), []);
  return reduced;
};

const reduceForecasts = (forecasts) => {
  const reduced = forecasts.reduce((data, item) => {
    let newData = data;
    const date = extractDate(item.dt);
    newData = checkHotter(newData, date, item.city, item.main.temp_max);
    newData = checkColder(newData, date, item.city, item.main.temp_min);
    newData = checkRainy(newData, date, item.city, item.weather[0].main);
    return newData;
  }, {});
  return reduced;
};


module.exports = {
  addCityNameToForecasts,
  flattenForecasts,
  reduceForecasts,
  processCityForecast,
};
