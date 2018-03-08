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
      <h3>About</h3>
      <p>Welcome to the about page</p>
    </div>
  )
}

module.exports = About;
