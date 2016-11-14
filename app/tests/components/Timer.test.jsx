var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

var Timer = require('Timer');

describe('Timer', function () {
  it('should exist', function () {
    expect(Timer).toExist();
  });

  it('should start Timer on started status', function (done) {
    var timer = TestUtils.renderIntoDocument(<Timer/>);
    timer.handleStatusChange('started');
    expect(timer.state.count).toBe(0);
    setTimeout( ()=>{
      expect(timer.state.timerStatus).toBe('started');
      expect(timer.state.count).toBe(1);
      done();
    },1001);
  });

  it('should pause Timer on paused status', function (done) {
    var timer = TestUtils.renderIntoDocument(<Timer/>);
    timer.setState({count:10});
    timer.handleStatusChange('started');
    timer.handleStatusChange('paused');
    setTimeout( ()=>{
      expect(timer.state.timerStatus).toBe('paused');
      expect(timer.state.count).toBe(10);
      done();
    },1001);
  });

  it('should clear count on stopped status', function (done) {
    var timer = TestUtils.renderIntoDocument(<Timer/>);
    timer.setState({count:10});
    timer.handleStatusChange('started');
    timer.handleStatusChange('stopped');
    setTimeout( ()=>{
      expect(timer.state.timerStatus).toBe('stopped');
      expect(timer.state.count).toBe(0);
      done();
    },1001);
  });

})
