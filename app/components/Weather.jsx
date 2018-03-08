var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var Weather = React.createClass({
  getInitialState:function(){
    return {
      // location: 'San Francisco',
      // temp: 56,
      // icon: undefined
      isLoading:false
    }
  },
  handleSearch: function(location){
    //alert(location);
    var that = this;
    this.setState({
      isLoading:true
    });

    openWeatherMap.getTemp(location).then(function(weather){
      that.setState({
        location: location,
        temp: weather.temp,
        icon:weather.icon,
        isLoading:false
      })
    }, function(err){
      alert(err)
      that.setState({
        isLoading:false
      })
    })
  },
  render: function(){
    var {isLoading,temp,location,icon} = this.state;
    function renderMessage(){
      if(isLoading){
        return <h3>Fetching Weather Data...</h3>;
      } else if(temp&&location){
        return <WeatherMessage icon={icon} temp={temp} location={location}/>;
      }
    }

    return (
      <div>
        <h3>Get Weather Component</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    )
  }
})

module.exports = Weather;
