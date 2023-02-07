import React from 'react';
import { createSlice, configureStore } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';


// Create the slice
const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0,
        component1: 1,
        component2: 2,
        component3: 3,
    },
    reducers: {
        increment: state => {
            state.count++;
        },
        decrement: state => {
            state.count--;
        },
    },
});

// Extract the actions and state from the slice
const { increment, decrement } = counterSlice.actions;
const counterReducer = counterSlice.reducer;

// Create the store
export const store = configureStore({
    reducer: counterReducer,
});


// App component
const ReduxToolkitApp = () => (
    <div>
        <Counter />
        <Component1 />
        <Component2 />
        <Component3 />
    </div>
);

export default ReduxToolkitApp;

// Counter component
const Counter = () => {
    const { count } = useSelector(state => state);

    const dispatch = useDispatch();

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    );
};

const Component1 = () => {
    const component1 = useSelector(state => state.component1);

    console.log("component1", component1);


    return (
        <div>component1: {component1}</div>
    );
};

const Component2 = () => {
    const component2 = useSelector(state => state.component2);

    console.log("component2", component2);


    return (
        <div>component2: {component2}</div>
    );
};

const Component3 = () => {
    const component3 = useSelector(state => state.component3);

    console.log("component3", component3);


    return (
        <div>component3: {component3}</div>
    );
};