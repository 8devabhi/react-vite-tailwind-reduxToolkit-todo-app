import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { selectTodosByPriority } from "../redux/todoSlice";

function TodoList() {
  const todos = useSelector(selectTodosByPriority);

  return (
    <ul className="mt-4">
      {todos && todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
    </ul>
  );
}

export default TodoList;
