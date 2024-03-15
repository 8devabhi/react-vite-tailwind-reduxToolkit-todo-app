import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';
import { useDispatch } from 'react-redux';
import { clearCompleted } from './redux/todoSlice';

function App() {
  const dispatch = useDispatch();

  const handleClearCompleted = () => {
    dispatch(clearCompleted());
  };

  return (
    <div className="flex flex-col items-center min-h-screen">
      <div className="mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Todo List</h1>
        <AddTodoForm />
        <TodoList />
        <button
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
          onClick={handleClearCompleted}
        >
          Clear Completed
        </button>
      </div>
    </div>
  );
}

export default App;
