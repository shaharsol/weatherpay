const {toCsv} = require("./model")
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
  path: 'out.csv',
  header: [
    {id: 'date', title: 'Date'},
    {id: 'hottest_city', title: 'Hottest City'},
    {id: 'coldest_city', title: 'Coldest City'},
    {id: 'rainy_cities', title: 'Rainy Cities'},
  ]
});

const write = async () => {
  await csvWriter.writeRecords()
}
