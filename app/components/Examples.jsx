var React = require('react');
var {Link} = require('react-router');
// var Examples = React.createClass({
//   render: function(){
//     return (
//       <h3>Examples</h3>
//     )
//   }
// });

var Examples = (props) => {
  return(
    <div>
      <h1 className='text-center'>Examples</h1>
      <p>Here are a few example locations to try out:</p>
      <ol>
        <li>
          <Link to="/?location=SanFrancisco">San Francisco, CA</Link>
        </li>
        <li>
          <Link to='/?location=Rio'>Rio, Brazil</Link>
        </li>
        <li>
          <Link to='/?location=London'>London</Link>
        </li>
      </ol>
    </div>

  )
}

module.exports = Examples;
