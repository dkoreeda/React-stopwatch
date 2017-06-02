import React, { Component } from 'react';
import Laps from './Laps';

class Display extends Component {

  constructor() {
    super();
    this.state = {
      seconds: "00",
      milliseconds: "00",
      laps: [],
      clock: null
    }
  }

  startClock(e) {
    const myFunction = () => {
      // document.querySelector("color").attribute("class", "green");

      this.setState((prevState) => {
        if((parseInt(this.state.milliseconds)) > 99) {
          // console.log(prevState);
            return {
              seconds: parseInt(prevState.seconds) < 9 ? "0" + (parseInt(prevState.seconds) + 1) : (parseInt(prevState.seconds) + 1),
              milliseconds: "00",
            }
        } else {
          return {
            milliseconds: parseInt(prevState.milliseconds) < 9 ? "0" + (parseInt(prevState.milliseconds) + 1) : (parseInt(prevState.milliseconds) + 1)
          };
        }
      });
    }

    this.state.clock = setInterval(myFunction, 10);
    // console.log("this", this);

  }

  stopClock() {
    clearInterval(this.state.clock);
  }

  resetClock() {
    this.stopClock();
    this.setState(() => {
      return {
        seconds: "00",
        milliseconds: "00",
        clock: null
      }
    })
  }

  save() {
    this.setState((prevState) => {
      const newLap = prevState.lap;
      newLap.push(prevState.input);
      return {content: newContent, input: ''};
    }); // ends this.setstate
  }

  render() {
    return(
      <div className="display">
        <div className="color">{this.state.seconds}:{this.state.milliseconds}</div>
        <button onClick={(e) => this.startClock(e)}> Start </button>
        <button onClick={(e) => this.stopClock()}>Stop</button>
        <button onClick={(e) => this.resetClock()}>Reset</button>
        <button onClick={(e) => this.save()}>Save</button>
        <Laps text={this.state}/>
      </div>
    );
  }
}

export default Display;

