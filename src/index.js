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
            return action.state + 1;
        case 'DECREMENT':
            return action.state - 1;
        default:
            return state;
    }
}

// STORE CREATION
const store = createStore(counter);

// COMPONENT
class Counter extends React.Component {
    // DISPATCHERS
    onIncrement = () => {
        store.dispatch({
            state: this.props.value,
            type: INCREMENT
        })
    }

    onDecrement = () => {
        store.dispatch({
            state: this.props.value,
            type: DECREMENT
        })
    }

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.value}</h2>
                <button onClick={this.onIncrement}>+</button>
                <button onClick={this.onDecrement}>-</button>
            </div>
        );
    }
}

const render = () => {
    ReactDOM.render((
        <Counter
            title="Simple Counter"
            value={store.getState()}
        />
    ), document.getElementById('root'));
}

store.subscribe(render);
render();

