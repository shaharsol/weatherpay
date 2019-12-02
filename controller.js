const {getCityForecast} = require("./weather");
const {processCityForecast} = require("./reducer");
const {
  toCsv,
  getData
} = require("./model");
const {write} = require("./csv");

const processCity = async (city) => {
  const response = await getCityForecast(city);
  processCityForecast(city,response.data);
}

const saveCsv = async () => {
  await write(toCsv());
}

module.exports = {
  processCity,
  saveCsv
}
