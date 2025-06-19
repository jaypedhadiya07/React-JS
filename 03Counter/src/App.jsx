import { useState } from "react";

function App() {
  let [count, setCount] = useState(0);

  const add = () => {
    if (count < 20) {
      setCount(++count);
    }
  };
  const remove = () => {
    if (count > 0) {
      setCount(--count);
    }
  };
  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={remove}>Remove Value</button>
      <button onClick={add}>Add Value</button>
    </>
  );
}

export default App
