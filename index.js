const config = require("config");
const {processCity} = require("./controller");
const {getData} = require("./model");

const run = async () => {
  await Promise.all(config.get("cities").map(city => processCity(city)))
  console.log(getData());
}

run();
