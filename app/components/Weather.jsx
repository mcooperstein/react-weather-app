var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

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
      isLoading:true,
      errorMessage:undefined,
      location: undefined,
      temp: undefined,
      icon: undefined
    });

    openWeatherMap.getTemp(location).then(function(weather){
      that.setState({
        location: location,
        temp: weather.temp,
        icon:weather.icon,
        isLoading:false
      })
    }, function(e){
      that.setState({
        isLoading:false,
        errorMessage:e.message
      })
    })
  },
  componentDidMount:function(){
    var location = this.props.location.query.location;
    if(location && location.length>0){
      this.handleSearch(location);
      // clear out url string
      window.location.hash = '#/';
    }
  },
  componentWillReceiveProps:function(newProps){
    var location = newProps.location.query.location;
    if(location && location.length>0){
      this.handleSearch(location);
      // clear out url string
      window.location.hash = '#/';
    }
  },
  render: function(){
    var {isLoading,temp,location,icon, errorMessage} = this.state;

    function renderMessage(){
      if(isLoading){
        return <h3 className='text-center'>Fetching Weather Data...</h3>;
      } else if(temp&&location){
        return <WeatherMessage icon={icon} temp={temp} location={location}/>;
      }
    }

    function renderError(){
      if(typeof errorMessage === 'string'){
        return(
          <ErrorModal message={errorMessage}/>
        )
      }
    }

    return (
      <div>
        <h1 className='text-center page-title'>Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    )
  }
})

module.exports = Weather;
