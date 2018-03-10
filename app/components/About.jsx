var React = require('react');

// var About = React.createClass({
//   render: function(){
//     return (
//       <h3>About Component</h3>
//     )
//   }
// })

// Stateless Functional Component
// with arrow function syntax
var About = (props)=>{
  return(
    <div>
      <h1 className='text-center'>About</h1>
      <p>First Project in Andrew Mead React Course</p>
      <p>Here are some of the tools I used:</p>
      <ul>
        <li>
          React
        </li>
        <li>
          Open Weather Map API
        </li>
        <li>
          Foundation for CSS Styling
        </li>
      </ul>
      <a target="_blank" href="https://github.com/mcooperstein/react-weather-app"><h5>Link to the Github Repo</h5></a>
    </div>
  )
}

module.exports = About;
