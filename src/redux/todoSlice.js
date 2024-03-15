import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
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
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    clearCompleted: (state) => {
      state.todos = state.todos.filter((todo) => !todo.completed);
    },
    setPriority: (state, action) => {
      const { id, priority } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.priority = priority;
      }
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
