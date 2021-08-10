import React, { useState } from 'react';

const Todo = () => {
  const [todo, setTodo] = useState('');
  const [warning, setWarning] = useState('');

  const handleInput = e => {
    const inputValue = e.target.value;
    const warning = inputValue.includes('js')
      ? 'You need to learn javascript'
      : 'Fine !!!';

    setTodo(inputValue);
    setWarning(warning);
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
