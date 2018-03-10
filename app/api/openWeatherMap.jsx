var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=80c25ea12685b02191e3b44f2341b58d&units=imperial';
// API key
// 80c25ea12685b02191e3b44f2341b58d

module.exports = {
  getTemp: function(location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(res){
      //debugger;
      if(res.data.cod && res.data.message){
        throw new Error(res.data.message);
      } else {
        return {
          temp: res.data.main.temp,
          icon:res.data.weather[0].icon
      };
    }
    }, function(res){
      //throw new Error(res.response.data.message);
      throw new Error('Unable to fetch weather for that location')
    });
  }
}
