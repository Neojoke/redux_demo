import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App, Counter } from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore , combineReducers } from 'redux';
const defaultState = {
    value:0
}
const CounterReducer = (state= defaultState,action)=>{
  const { type } = action;
  switch (type) {
    case 'INCREMENT':
      return Object.assign({},state,{ value:state.value+1 });
    case 'DECREMENT':
      return Object.assign({},state,{ value:state.value-1 });
    default:
      return state;
  }
}
const store = createStore(CounterReducer);
const render = ()=>{
    ReactDOM.render(<Counter value={store.getState().value} onIncrement={()=>store.dispatch({type:'INCREMENT'})} onDecrement={()=>store.dispatch({type:'DECREMENT'})}/>, document.getElementById('root'));
}
render()

store.subscribe(render);
registerServiceWorker();
