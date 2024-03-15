import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: JSON.parse(localStorage.getItem("to-do-history")) || [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        text: action.payload.text,
        completed: false,
        priority: "Low",
      };
      state.todos.push(newTodo);
      localStorage.setItem("to-do-history", JSON.stringify(state.todos));
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
      localStorage.setItem("to-do-history", JSON.stringify(state.todos));
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("to-do-history", JSON.stringify(state.todos));
    },
    clearCompleted: (state) => {
      state.todos = state.todos.filter((todo) => !todo.completed);
      localStorage.setItem("to-do-history", JSON.stringify(state.todos));
    },
    setPriority: (state, action) => {
      const { id, priority } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.priority = priority;
      }
      localStorage.setItem("to-do-history", JSON.stringify(state.todos));
    },
  },
});

export const { addTodo, toggleTodo, removeTodo, clearCompleted, setPriority } =
  todoSlice.actions;

export const selectTodosByPriority = (state) => {
  return state?.todos?.todos?.slice().sort((a, b) => {
    if (a.priority === "High") return -1;
    if (b.priority === "High") return 1;
    if (a.priority === "Medium") return -1;
    if (b.priority === "Medium") return 1;
    return 0;
  });
};

export default todoSlice.reducer;
