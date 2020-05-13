import React, { Component } from "react";

export default class Counter extends Component {
    state = {
        count : 0,
        
    };
  render() {
    React.createElement("h1");
    return (
      <div>
        <span>{this.state.count}</span>
        <button>Increment</button>
      </div>
    );
  }
}
