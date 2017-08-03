import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
class Counter extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.value}</h1>
        <button onClick={this.props.onIncrement}>+</button>
        <button onClick={this.props.onDecrement}>-</button>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <h1>Welcome to the world!</h1>
    );
  }
}
export {App as default, Counter as Counter};
