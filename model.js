const data = {};

const newDate = () => {
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

const ensureDate = date => {
  data[date] = data[date] || newDate();
}

const checkColder = (date,city,temp) => {
  ensureDate(date);
  if(data[date].coldest_city.temp > temp){
    data[date].coldest_city.temp = temp;
    data[date].coldest_city.name = city;
  }
}

const checkHotter = (date,city,temp) => {
  ensureDate(date);
  if(data[date].hottest_city.temp < temp){
    data[date].hottest_city.temp = temp;
    data[date].hottest_city.name = city;
  }
}

const checkRainy = (date,city,weatherType) => {
  ensureDate(date);
  if(weatherType == "Rain" && !data[date].rainy_cities.includes(city)){
    data[date].rainy_cities.push(city);
  }
}

const getData = () => data;

const toCsv = () => Object.keys(data).map(date => {
  return {
    date: date,
    hottest_city: data[date].hottest_city.name,
    coldest_city: data[date].coldest_city.name,
    rainy_cities: data[date].rainy_cities
  }
})

module.exports = {
  checkHotter,
  checkColder,
  checkRainy,
  getData,
  toCsv
}
