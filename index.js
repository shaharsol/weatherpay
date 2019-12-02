const config = require('config');
const { getCityForecast } = require('./weather');
const {
  extractForecasts,
  addCityNameToForecasts,
  flattenForecasts,
  reduceForecasts,
} = require('./reducer');
const { toCsv } = require('./model');
const { write } = require('./csv');


const run = async () => {
  try {
    const responses = await Promise.all(config.get('cities').map((city) => getCityForecast(city)));
    const forecasts = extractForecasts(responses);
    const cityNamedForecasts = addCityNameToForecasts(forecasts);
    const flattenedForecasts = flattenForecasts(cityNamedForecasts);
    const reducedForecasts = reduceForecasts(flattenedForecasts);
    const csvData = toCsv(reducedForecasts);
    await write(csvData);
    console.log('Forecast processed successfuly. Please find results in %s', config.get('csv.path'));
  } catch (e) {
    console.error('An error occured: %s', e);
  }
};

run();
