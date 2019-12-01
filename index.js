/*

filter the result of each api call, need only main.temp_min, main.temo_max and weather.man == Rain

*/

// console.log(moment.unix(1575612000).toDate());
// process.exit()

const {extractDate} = require("./helpers");
console.log(extractDate(1575612000));
process.exit()

const config = require("config");
const {getCityForecast} = require("./weather");

const run = async () => {
  var ret = await getCityForecast('London');
  console.log(ret);
}

const runAll = async () => {
  var ret = await Promise.all(config.get("cities").map(city => getCityForecast(city)))
  console.log(ret);
}

runAll();
