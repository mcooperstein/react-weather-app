var React = require('react');
var {Link, IndexLink} = require('react-router');

// var Nav = React.createClass({
//   render: function(){
//     return (
//       <div>
//         <h2>Nav Component</h2>
//         <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold', border:'5px solid red'}}>Get Weather</IndexLink>
//         <Link to="/about" activeClassName="active" activeStyle={{fontWeight:'bold', border:'5px solid red'}}>About</Link>
//         <Link to="/examples" activeClassName="active" activeStyle={{fontWeight:'bold', border:'5px solid red'}}>Examples</Link>
//       </div>
//     );
//   }
// });

var Nav = (props)=>{
  return (
        <div>
          <h2>Nav Component</h2>
          <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold', border:'5px solid red'}}>Get Weather</IndexLink>
          <Link to="/about" activeClassName="active" activeStyle={{fontWeight:'bold', border:'5px solid red'}}>About</Link>
          <Link to="/examples" activeClassName="active" activeStyle={{fontWeight:'bold', border:'5px solid red'}}>Examples</Link>
        </div>
      );
}

module.exports = Nav;
