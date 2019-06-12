import React, { Component } from 'react';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "SUBSCRIBE TO BASIC" };
    this.handleCLick = this.handleCLick.bind(this);
  }
  
  handleCLick = () => {
    this.setState(this.stateUpdater)
  }
  
  stateUpdater = () => {
    return { text: "PROCEED TO CHECKOUT"};
  }
  render() {
    return (
      <button onClick={this.handleCLick}>
        {this.state.text || this.props.text}
      </button>
    );
  }
}
