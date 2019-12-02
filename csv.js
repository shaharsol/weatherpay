const config = require('config');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const csvWriter = createCsvWriter({
  path: config.get('csv.path'),
  header: [
    { id: 'date', title: 'Date' },
    { id: 'hottest_city', title: 'Hottest City' },
    { id: 'coldest_city', title: 'Coldest City' },
    { id: 'rainy_cities', title: 'Rainy Cities' },
  ],
});

const write = async (data) => {
  await csvWriter.writeRecords(data);
};

module.exports = {
  write,
};
