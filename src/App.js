import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

function Counter(props) {
  function incrementIfOdd() {
    if (props.value % 2 !== 0) {
      props.onIncrement();
    }
  }
  function incrementAsync() {
    setTimeout(function () {
      props.onIncrement();
    }, 1000);
  }
  const {value, onIncrement, onDecrement} = props;
  return(
    <p>
      Clicked: {value}
      items {' '}
      <button onClick={onIncrement}>+</button>
      {' '}
      <button onClick={onDecrement}>-</button>
      {' '}
      <button onClick={ incrementIfOdd }>Increment if odd</button>
      <button onClick={ incrementAsync }>Increment async</button>
    </p>)
}

function NewCounter(props) {
  const {value, onIncreaseClick} = props;
  return (
    <div>
      <span>{ value }</span>
      <button onClick={ onIncreaseClick }>Increase</button>
    </div>
  )
}

export {Counter as Counter, NewCounter as NewCounter};
