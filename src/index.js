import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Counter, NewCounter } from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore , combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise'
import { connect, Provider } from 'react-redux';

const action = {
    type:'',
    payload:''
}
const defaultState = {
    value:10
};
const reducer = (state=defaultState,action)=>{
    switch (action.type) {
        case 'INCREMENT':
            return Object.assign({},state,{'value':state.value+1});
        case 'DECREMENT':
            return Object.assign({},state,{'value':state.value-1});
        default:
            return state;
    }
}
const store = createStore(reducer);
const App = (props)=>{
    return(
    <div>
        <Counter value = { store.getState().value } onDecrement={ ()=>store.dispatch({'type':'DECREMENT'}) } onIncrement = { ()=>store.dispatch({'type':'INCREMENT'}) }/>
        <NewCounter/>
    </div>
    )
}
const render = ()=>{
    ReactDOM.render(<App/>,document.getElementById('root'));
}
store.subscribe(render);
render();