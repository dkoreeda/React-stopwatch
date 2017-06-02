import React, { Component } from 'react';

class Lap extends Component {
  render() {
    console.log(this.props);
    return (
      <p> { this.props.text.seconds }:{ this.props.text.milliseconds } </p>
    );
  }
}

export default Lap;
