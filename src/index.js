import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

// ACTIONS
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

// REDUCER
const counter = (state = 100, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

// STORE CREATION
const store = createStore(counter);

// DISPATCHERS
const incrementing = (state) => {
    store.dispatch({ type: INCREMENT });
}

const decrementing = () => {
    store.dispatch({ type: DECREMENT });
}

// COMPONENT

const Counter = ({
    value,
    onIncrement,
    onDecrement
}) => (
    <div>
        <h1>Simple Counter</h1>
        <h1>{value}</h1>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
    </div>
);

const render = () => {
    ReactDOM.render((
        <Counter
            value={store.getState()}
            onIncrement={incrementing}
            onDecrement={decrementing}
        />
    ), document.getElementById('app'));
}

store.subscribe(render);
render();