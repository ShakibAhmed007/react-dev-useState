import React from 'react';
import './style.css';
import Todo from './components/Todo';
import Counter from './components/Counter';

export default function App() {
  return (
    <div>
      <h1>useState Hook !!!</h1>
      <Todo />
      <Counter />
    </div>
  );
}
