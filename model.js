const {extractDate} = require("./helpers");

const data = [];

const newLine = () => {
  return {
    hottest_city: {
      name: null,
      temp: 0
    },
    coldest_city: {
      name: null,
      temp: Number.MAX_SAFE_INTEGER
    },
    rainy_cities: []
  };
}

const checkColder = (date,city,item) => {
  if(data[date].coldest_city.temp > item.main.temp_min){
    data[date].coldest_city.temp = item.main.temp_min;
    data[date].coldest_city.name = city;
  }
}

const checkHotter = (date,city,item) => {
  if(data[date].hottest_city.temp < item.main.temp_max){
    data[date].hottest_city.temp = item.main.temp_max;
    data[date].hottest_city.name = city;
  }
}

const checkRainy = (date,city,item) => {
  if(item.weather[0].main == "Rain" && !data[date].rainy_cities.includes(city)){
    data[date].rainy_cities.push(city);
  }
}

const processItem = (city, item) => {
  const date = extractDate(item.dt);
  data[date] = data[date] || newLine();
  checkHotter(date,city,item);
  checkColder(date,city,item);
  checkRainy(date,city,item);
}

const processCityForecast = (city, forecast) => {
  forecast.list.forEach(item => processItem(city, item));
}

const getData = () => data;

module.exports = {
  processCityForecast,
  getData
}
