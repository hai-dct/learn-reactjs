import React, { Component } from 'react';

class Circle extends Component {

  constructor(props) {
    super(props);
    console.log('constructor circle');
    this.state = {
      timer: props.number,
      isTimerRunning: props.number !== ''
    };
    this.timmer = null;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
  }

  startTimer() {
    console.log('StartTimer');
    console.log(this.props);
    if (this.state.timer > 0) {
      console.log('Start');
      this.timmer = setInterval(this.countDown, 1000);
      this.setState({
        isTimerRunning: true
      })
    }
  }

  stopTimer() {
    console.log('StopTimer');
    clearInterval(this.timmer);

    this.setState({
      isTimerRunning: false
    })
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    this.setState(prev => ({
      timer: prev.timer - 1
    }));

    // Check if we're at zero.
    if (this.state.timer === 0) {
      this.stopTimer()
    }
  }

  componentDidMount() {
    console.log('componentDidMount');
  }


  componentDidUpdate(previousProps, previousState) {
    console.log('componentDidUpdate');
    if (previousProps.number !== this.props.number) {
      this.setState({
        timer: this.props.number
      })
    }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    this.stopTimer();
  }

  render() {
    console.log('render Circle');
    const { width, height } = this.props;
    const { timer, isTimerRunning } = this.state;

    const styles = {
      width: width,
      height: height,
      borderRadius: '50%',
      backgroundColor: 'red',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '10px'
    };

    return (
      <div>
        <button onClick={isTimerRunning ? this.stopTimer : this.startTimer}>{isTimerRunning ? 'Stop' : 'Start'}</button>
        <div style={styles} onClick={this.toggleColor}>
          <p>{timer}</p>
        </div>
      </div>
    );
  }
}

export default Circle;