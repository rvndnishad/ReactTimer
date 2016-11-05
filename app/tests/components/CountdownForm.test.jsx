var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtil = require('react-addons-test-utils');
var $ = require('jQuery');

var CountdownForm = require('CountdownForm');

describe('CountdownForm', function () {
  it("should exist", ()=> {
    expect(CountdownForm).toExist();
  });

  it("should call onSetCountdown if valid seconds entered", ()=>{
    var spy = expect.createSpy();
    var countdownForm = TestUtil.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
    var $el = $(ReactDOM.findDOMNode(countdownForm));

    countdownForm.refs.seconds.value = '109';
    TestUtil.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(109);
  });

  it("should not call onSetCountdown if invalid data entered", ()=> {
    var spy = expect.createSpy();
    var countdownForm = TestUtil.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
    var $el = $(ReactDOM.findDOMNode(countdownForm));

    countdownForm.refs.seconds.value='asdf';
    TestUtil.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
});
