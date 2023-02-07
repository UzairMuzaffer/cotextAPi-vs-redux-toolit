import { useState, createContext, useContext } from 'react';

// Create the context
const CounterContext = createContext();

// Provider component
const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const component1 = 1;
  const component2 = 2;
  const component3 = 3;

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  const values = { count, increment, decrement, component1, component2, component3 };

  return (
    <CounterContext.Provider value={values}>
      {children}
    </CounterContext.Provider>
  );
};

// App component
const ContextApp = () => (
  <CounterProvider>
    <Counter />
    <Component1 />
    <Component2 />
    <Component3 />
  </CounterProvider>
);

export default ContextApp;

// Counter component
const Counter = () => {
  const { count, increment, decrement } = useContext(CounterContext);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

const Component1 = () => {
  const { component1 } = useContext(CounterContext);

  console.log("component1", component1);


  return (
    <div>component1: {component1}</div>
  );
};

const Component2 = () => {
  const { component2 } = useContext(CounterContext);

  console.log("component2", component2);


  return (
    <div>component2: {component2}</div>
  );
};

const Component3 = () => {
  const { component3 } = useContext(CounterContext);

  console.log("component3", component3);


  return (
    <div>component3: {component3}</div>
  );
};