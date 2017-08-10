import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
class Counter extends Component {
  render() {
    return (
      <div>
        <p>{ this.props.value }</p>
        <button onClick={this.props.increment}>+</button>
        <button onClick={this.props.decrement}>-</button>
        <button onClick={this.props.delayIncrement}>delay</button>
        <p>{this.props.state}</p>
      </div>
    );
  }
}
export { Counter as Counter};
