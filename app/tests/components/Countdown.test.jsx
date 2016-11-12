var React = require('react');
var ReactDOM = require('react-dom');
var TestUtil = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

var Countdown = require('Countdown');

describe("Countdown", ()=>{
  it("should exits", ()=>{
    expect(Countdown).toExist();
  });

  describe("handleSetCountdown", () => {
    it("should set state to started and countdown", (done) => {
      var countdown = TestUtil.renderIntoDocument(<Countdown />);
      countdown.handleSetCountdown(10);

      expect(countdown.state.count).toBe(10);
      expect(countdown.state.countdownStatus).toBe('started');

      setTimeout(()=>{
        expect(countdown.state.count).toBe(9);
        done();
      },1001);
    });

    it("should never set count less than zero", (done) => {
      var countdown = TestUtil.renderIntoDocument(<Countdown />);
      countdown.handleSetCountdown(1);
        setTimeout(()=>{
        expect(countdown.state.count).toBe(0);
        done();
      },3001);
    });
  });

});
