import React, { useState } from 'react';

const UseStateExample = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>useState Example</h2>
      <p>Current count: {count}</p>
      <p>
        Este número es: <strong>{count % 2 === 0 ? 'Par' : 'Impar'}</strong>
      </p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </>
  );
};

export default UseStateExample;
