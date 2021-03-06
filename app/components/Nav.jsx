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

// var Nav = (props)=>{
//   return (
//         <div>
//           <h2>Nav Component</h2>
//           <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold', border:'5px solid red'}}>Get Weather</IndexLink>
//           <Link to="/about" activeClassName="active" activeStyle={{fontWeight:'bold', border:'5px solid red'}}>About</Link>
//           <Link to="/examples" activeClassName="active" activeStyle={{fontWeight:'bold', border:'5px solid red'}}>Examples</Link>
//         </div>
//       );
// }
var Nav = React.createClass({
  onSearch: function(e){
    e.preventDefault();
    //alert('not yet wired up')
    var location = this.refs.search.value;
    var encodedLocation = encodeURIComponent(location);
    if(location.length>0){
      this.refs.search.value = "";
      window.location.hash = '#/?location=' + encodedLocation;
    }
  },
  render: function(){
    return(
        <div className='top-bar'>
          <div className='top-bar-left'>
            <ul className='menu'>
              <li className='menu-text'>
                React Weather App
              </li>
              <li>
                <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold', border:'5px solid red'}}>Get Weather</IndexLink>
              </li>
              <li>
                <Link to="/about" activeClassName="active" activeStyle={{fontWeight:'bold', border:'5px solid red'}}>About</Link>
              </li>
              <li>
                <Link to="/examples" activeClassName="active" activeStyle={{fontWeight:'bold', border:'5px solid red'}}>Examples</Link>
              </li>
            </ul>
          </div>
          <div className='top-bar-right'>
            <form onSubmit={this.onSearch}>
              <ul className='menu'>
                <li>
                  <input ref="search" type='text' placeholder='Search Weather by City'/>
                </li>
                <li>
                  <input type='submit' className='button' value='Get Weather'/>
                </li>
              </ul>
            </form>
          </div>
        </div>
    )
  }
})

module.exports = Nav;
