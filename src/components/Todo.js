import React, { useState } from 'react';

const Todo = () => {
  const [todo, setTodo] = useState('');
  const [warning, setWarning] = useState('');

  const handleInput = e => {
    console.log(e.target.value);
  };

  return (
    <div>
      <p>{todo}</p>
      <textarea name="todo" value={todo} onChange={handleInput} />
      <h2>{warning || 'Good Choice'}</h2>
    </div>
  );
};

export default Todo;
