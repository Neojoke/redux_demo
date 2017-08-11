import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Counter, NewCounter } from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore , combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise'
import { connect } from 'react-redux';
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
const delayDecrease = (dispatch,state)=>new Promise((resolve, reject)=>{
    dispatch({type:'STATECHANGE',state:'马上就好了'})
    setTimeout(function() {
        resolve();
    }, 5000).then(()=>dispatch({type:'STATECHANGE',state:''})).then(()=>dispatch({type:'DECREMENT'}));
})

const increaseAction = {type:'increase'};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onIncreaseClick: () => {
            dispatch(increaseAction);
        }
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        value: state.count
    }
}
const Module = connect(mapStateToProps,mapDispatchToProps)(NewCounter);
function newCounterReducer(state, action) {
    const count = state.count;
    switch (action.type) {
        case 'increase':
            return { count:count+1}
        default:
            return state;
    }
}
const Store = createStore(CounterReducer,applyMiddleware(logger,thunk,promiseMiddleware));
const render = ()=>{
    ReactDOM.render(<Counter state={Store.getState().state} value={Store.getState().value} increment={ ()=> Store.dispatch({type:"INCREMENT"}) } decrement={ ()=>Store.dispatch({type:"DECREMENT"}) } delayIncrement={()=>Store.dispatch(delayAdd('正在计算中'))}  />,document.getElementById('root'))
}
render();
Store.subscribe(render);