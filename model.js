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
  data[date] = data[date] || newDate();
  return data;
};

const checkColder = (data, date, city, temp) => {
  data = ensureDate(data, date);
  if (data[date].coldest_city.temp > temp) {
    data[date].coldest_city.temp = temp;
    data[date].coldest_city.name = city;
  }
  return data;
};

const checkHotter = (data, date, city, temp) => {
  data = ensureDate(data, date);
  if (data[date].hottest_city.temp < temp) {
    data[date].hottest_city.temp = temp;
    data[date].hottest_city.name = city;
  }
  return data;
};

const checkRainy = (data, date, city, weatherType) => {
  data = ensureDate(data, date);
  if (weatherType === 'Rain' && !data[date].rainy_cities.includes(city)) {
    data[date].rainy_cities.push(city);
  }
  return data;
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
