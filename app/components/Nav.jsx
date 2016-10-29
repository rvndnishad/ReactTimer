var React = require('react');
var ReactDOM = require('react-dom');
var {Link, IndexLink} = require("react-router")

var Nav = React.createClass({
  render:function(){
    return(
      <div className="top-bar">
          <div className="top-bar-left">
              <ul className="menu">
                <li className="menu-text">React Timer</li>
                <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Timer</IndexLink></li>
                <li><Link to="/Countdown" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Countdown</Link></li>
              </ul>
          </div>
          <div className="top-bar-right">
            <ul className="menu">
              <li className="menu-text">Created By Arvind Nishad</li>
            </ul>
          </div>
      </div>
    );
  }
});

module.exports = Nav;
