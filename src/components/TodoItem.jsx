import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, removeTodo, setPriority } from '../redux/todoSlice';

function TodoItem({ todo }) {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id));
  };

  const handleRemove = () => {
    dispatch(removeTodo(todo.id));
  };

  const handlePriorityChange = e => {
    dispatch(setPriority({ id: todo.id, priority: e.target.value }));
  };

  return (
    <li className="flex justify-between items-center border-b py-2">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggle}
          className="mr-2"
        />
        <span className={`text-lg ${todo.completed ? 'line-through text-gray-500' : ''}`}>
          {todo.text}
        </span>
      </div>
      <div className="flex items-center">
        <select
          className="border rounded px-2 py-1 mr-2"
          value={todo.priority}
          onChange={handlePriorityChange}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <button
          className="px-2 py-1 bg-red-500 text-white rounded"
          onClick={handleRemove}
        >
          Remove
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
