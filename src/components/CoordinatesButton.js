// Code CoordinatesButton Component Here
import React, {Component} from 'react'

export default class CoordinatesButton extends Component {  
  
  handleClick = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY]); // prints 'click'
  }

  render() {
      return (
        <div>
          <button onClick={this.handleClick}>Oh</button>
        </div>
      );
    }
  }