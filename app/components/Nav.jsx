var React = require('react');
var ReactDOM = require('react-dom');
var {Link, IndexLink} = require("react-router")

var Nav = () => {
    return(
      <div className="top-bar">
          <div className="top-bar-left">
              <ul className="menu">
                <li className="menu-text">React Timer</li>
                <li><IndexLink to="/" activeClassName="active-link">Timer</IndexLink></li>
                <li><Link to="/Countdown" activeClassName="active-link">Countdown</Link></li>
              </ul>
          </div>
          <div className="top-bar-right">
            <ul className="menu">
              <li className="menu-text">Created By Arvind Nishad</li>
            </ul>
          </div>
      </div>
    );
};

module.exports = Nav;
