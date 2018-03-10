var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();
    //prevents entire page from reloading

    var location = this.refs.location.value;

    if(location.length>0){
      this.refs.location.value = "";
      this.props.onSearch(location);
    }
  },
  render: function(){
    return(
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" placeholder="Enter city name" ref="location"/>
          <button className='button primary hollow expanded'>Get Weather</button>
        </form>
      </div>
    )
  }
})

module.exports = WeatherForm;
