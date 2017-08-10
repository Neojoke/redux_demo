import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Counter } from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore , combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
const defaultState = {value:0,state:''};
const CounterReducer =  (state = defaultState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return Object.assign({},state,{value:state.value+1});
        case "DECREMENT":
            return Object.assign({},state,{value:state.value-1});
        case "STATECHANGE":
            return Object.assign({},state,{state:action.msg});
        default:
            return state;
    }
};
const delayAdd = (msg)=>(dispatch,getState)=>{
    dispatch({type:'STATECHANGE',msg:msg});
    return new  Promise((resolve, reject) => {
        setTimeout(function() {
            resolve();
        }, 5000);
    }).then(()=>dispatch({type:'STATECHANGE',msg:''})).then(()=>dispatch({type:'INCREMENT'}));
}

const Store = createStore(CounterReducer,applyMiddleware(logger,thunk));
const render = ()=>{
    ReactDOM.render(<Counter state={Store.getState().state} value={Store.getState().value} increment={ ()=> Store.dispatch({type:"INCREMENT"}) } decrement={ ()=>Store.dispatch({type:"DECREMENT"}) } delayIncrement={()=>Store.dispatch(delayAdd('正在计算中'))} />,document.getElementById('root'))
}
render();
Store.subscribe(render);
