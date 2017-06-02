import React, { Component } from 'react';
import Lap from './Lap';

class Laps extends Component {

  save() {
    // console.log(this.props.text);
    <Lap text={this.props.text} />
  }

  render() {
    return (
      <div>
        <button onClick={(e) => this.save(e) } >Laps</button>
        {this.save()}
      </div>
    );
  }

}

export default Laps;
