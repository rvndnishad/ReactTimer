var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({
  getInitialState:function(){
    return {
      count:0,
      timerStatus:'paused'
    };
  },
  componentDidUpdate:function(prevProps,prevState){
    if(this.state.timerStatus !==prevState.timerStatus) {
      switch(this.state.timerStatus){
        case 'started':
        this.startTimer();
        break;
        case 'stopped':
        this.setState({count:0});
        case 'paused':
        clearInterval(this.timer);
        this.timer = undefined;
        break;
      }
    }
  },
  startTimer:function(){
    this.timer = setInterval( () => {
      var cur_count = this.state.count+1;
      this.setState({
        count:cur_count
      })
    },1000);
  },
  componentWillUnmount:function(){
    clearInterval(this.timer)
  },
  handleStatusChange: function(newTimerStatus) {
    this.setState({
      timerStatus:newTimerStatus
    })
  },
  render:function () {
    var {count, timerStatus} = this.state;
    return(
      <div>
        <h1 className="page-title">Timer App</h1>
          <Clock totalSeconds={count}/>
          <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange}/>
      </div>
    );
  }
});
module.exports = Timer;
