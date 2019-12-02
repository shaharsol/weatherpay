const config = require('config');
const {
  processCity,
  saveCsv,
} = require('./controller');

const run = async () => {
  try {
    await Promise.all(config.get('cities').map((city) => processCity(city)));
    await saveCsv();
    console.log('Forecast processed successfuly. Please find results in %s', config.get('csv.path'));
  } catch (e) {
    console.error('An error occured: %s', e);
  }
};

run();
