var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Nav =require('Nav');
var Timer = require('Timer');
var  Countdown = require('Countdown');

//Load foundation

require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

//app class
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
			<Route path="/" component={Main}>
      <Route path="Countdown" component={Countdown}/>
      <IndexRoute component={Timer}/>
			</Route>
	</Router>,
  document.getElementById("app")
);