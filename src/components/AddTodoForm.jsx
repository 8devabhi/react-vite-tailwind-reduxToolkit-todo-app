import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoSlice';

function AddTodoForm() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    setText(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTodo({ text }));
      setText('');
    }
  };

  return (
    <form className="flex justify-between items-center" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        className="border rounded px-3 py-2 flex-grow mr-2"
        placeholder="Add a new todo..."
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Add Todo
      </button>
    </form>
  );
}

export default AddTodoForm;
