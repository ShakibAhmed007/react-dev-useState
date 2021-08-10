import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleInput = e => {
    const inputValue = e.target.value;
    setCount(prevState => prevState + 1);
  };

  return (
    <div>
      <p>{count}</p>
      <button type="button" onClick={handleInput}>
        Add 1
      </button>
    </div>
  );
};

export default Counter;
