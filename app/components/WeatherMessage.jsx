var React = require('react');

// var WeatherMessage = React.createClass({
//   render: function(){
//     var {temp,location,icon}=this.props;
//     return(
//       <div>
//       <h4>The temperature in {location} is currently {temp} degrees.</h4>
//       <img src={`http://openweathermap.org/img/w/${icon}.png`}/>
//       </div>
//     )
//   }
// })

// var WeatherMessage = (props) => {
//    var {temp,location,icon}=props;
//       return(
//         <div>
//         <h4>The temperature in {location} is currently {temp} degrees.</h4>
//         <img src={`http://openweathermap.org/img/w/${icon}.png`}/>
//         </div>
//       )
// }

// Destructuring Function Arguments

var WeatherMessage = ({temp,location,icon}) => {
        return(
          <div>
          <h4>The temperature in {location} is currently {temp} degrees.</h4>
          <img src={`http://openweathermap.org/img/w/${icon}.png`}/>
          </div>
        )
}

module.exports = WeatherMessage;
