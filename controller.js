const {getCityForecast} = require("./weather");
const {processCityForecast} = require("./model");

const processCity = async (city) => {
  const response = await getCityForecast(city);
  processCityForecast(city,response.data);
}

module.exports = {
  processCity
}
