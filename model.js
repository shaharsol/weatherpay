// const data = {};

const newDate = () => ({
  hottest_city: {
    name: null,
    temp: 0,
  },
  coldest_city: {
    name: null,
    temp: Number.MAX_SAFE_INTEGER,
  },
  rainy_cities: [],
});

const ensureDate = (data, date) => {
  const newData = data;
  newData[date] = newData[date] || newDate();
  return newData;
};

const checkColder = (data, date, city, temp) => {
  const newData = ensureDate(data, date);

  if (newData[date].coldest_city.temp > temp) {
    newData[date].coldest_city.temp = temp;
    newData[date].coldest_city.name = city;
  }
  return newData;
};

const checkHotter = (data, date, city, temp) => {
  const newData = ensureDate(data, date);
  if (newData[date].hottest_city.temp < temp) {
    newData[date].hottest_city.temp = temp;
    newData[date].hottest_city.name = city;
  }
  return newData;
};

const checkRainy = (data, date, city, weatherType) => {
  const newData = ensureDate(data, date);
  if (weatherType === 'Rain' && !newData[date].rainy_cities.includes(city)) {
    newData[date].rainy_cities.push(city);
  }
  return newData;
};


const toCsv = (data) => Object.keys(data).map((date) => ({
  date,
  hottest_city: data[date].hottest_city.name,
  coldest_city: data[date].coldest_city.name,
  rainy_cities: data[date].rainy_cities,
}));

module.exports = {
  checkHotter,
  checkColder,
  checkRainy,
  toCsv,
};
