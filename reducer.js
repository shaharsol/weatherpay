const {extractDate} = require("./helpers");


const reducer = (item,data) => {
  const date = extractDate(item.dt);
  if(!!data[date]){
    data[date] = {
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
  if(data[date].coldest_city.temp > item.main.temp_min){
    data[date].coldest_city.temp = item.main.temp_min;
    data[date].coldest_city.name = item.city;
  }
  if(data[date].hottest_city.temp < item.main.temp_max){
    data[date].hottest_city.temp = item.main.temp_max;
    data[date].hottest_city.name = item.city;
  }
  if(item.weather.main == "Rain" && !data[date].rainy_cities.includes(item.city)){
    data[date].rainy_cities.push(item.city);
  }
}
