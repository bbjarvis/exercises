import React, { Component } from react

class Counter extends Component {
  render() {
   return <button onClick={this.props.onClick}>{this.props.count}</button>;
  }
 }
 
 class Application extends Component {
  state = {
   count: 0
  };
 
  increment = event => {
   this.setState(previousState => ({
    count: previousState.count + 1
   }));
  };
 
  render() {
   return <Counter onClick={this.increment} count={this.state.count} />;
  }
 }