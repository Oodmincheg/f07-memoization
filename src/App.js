import { useState, memo, useMemo, useCallback, useEffect } from 'react';

function addName(hello) {
  return `${hello}, Vlad`;
}

const Counter = memo(function Counter({ counter, setCounter }) {
  return (
    <>
      <div>Counter: {counter}</div>;
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </>
  );
});

const Hello = memo(function Hello({ setHello, helloProps, increment }) {
  return (
    <>
      <div>{helloProps}</div>
      <button onClick={increment}>+1</button>
      <button onClick={() => setHello('Good buy')}>Say goodbay</button>
      <button onClick={() => setHello('Hello')}>Say Hello</button>
    </>
  );
}); //memoization component

function App() {
  const [counter, setCounter] = useState(0);
  const [hello, setHello] = useState('Hello');

  useEffect(() => console.log('counter changed'), []);

  useEffect(() => console.log('hello changed'), [hello, counter]);

  const newHello = useMemo(() => addName(hello), [hello]); // memoization value

  const increment = useCallback(function increment() {
    setCounter((counter) => counter + 1);
  }, []); //memoization function

  return (
    <>
      <Counter counter={counter} setCounter={setCounter} />
      <Hello helloProps={newHello} setHello={setHello} increment={increment} />
    </>
  );
}

export default App;

//useState
//useReducer
//useRef
//useEffect
//useMemo
//useCallback
//useContext

// useImperativeHandle
// useLayoutEffect
// useDebugValue
