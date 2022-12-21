import React, { useReducer } from 'react';

const initialState = {
    firstCounter: 0,
    secondCounter: 10,
};

const reducer = (state, action) => {
    const { type, value } = action;
    switch (type) {
        case 'increment':
            return { ...state, firstCounter: state.firstCounter + value };
        case 'decrement':
            return { ...state, firstCounter: state.firstCounter - value };
        case 'increment2':
            return { ...state, secondCounter: state.secondCounter + value };
        case 'decrement2':
            return { ...state, secondCounter: state.secondCounter - value };
        case 'reset':
            return initialState;
        default:
            return state;
    }
};

const CounterTwo = () => {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <div>Count - { count.firstCounter }</div>
            <div>Count - { count.secondCounter }</div>
            <button onClick={() => dispatch({type: 'increment', value: 1})}>Increment</button>
            <button onClick={() => dispatch({type: 'decrement', value: 1})}>Decrement</button>
            <button onClick={() => dispatch({type: 'increment', value: 5})}>Increment 5</button>
            <button onClick={() => dispatch({type: 'decrement', value: 5})}>Decrement 5</button>
            <div>
                <button onClick={() => dispatch({type: 'increment2', value: 1})}>Increment Counter 2</button>
                <button onClick={() => dispatch({type: 'decrement2', value: 1})}>Decrement Counter 2</button>
            </div>
            <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
        </div>
    );
};

export default CounterTwo;