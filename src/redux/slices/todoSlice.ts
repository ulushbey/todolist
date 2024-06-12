import { Todo } from "@/app/components/types/Todo.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  todos: Todo[];
  filter: string;
  selectedTodo: Todo | null;
};
const initialState: InitialState = {
  todos: [],
  filter: "all",
  selectedTodo: null,
};
const todoSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    setInitialData: (state, action: PayloadAction<Todo[]>) => {
      state.todos = action.payload;
    },
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.unshift(action.payload);
    },
    toggleTodo: (state, action: PayloadAction<Todo>) => {
      state.todos = state.todos.map((item) =>
        item.id === action.payload.id
          ? { ...item, completed: action.payload.completed }
          : item
      );
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
    selectTodo: (state, action: PayloadAction<Todo>) => {
      state.selectedTodo = action.payload;
    },
    editTodo: (state, action: PayloadAction<Todo>) => {
      state.todos = state.todos.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
      state.selectedTodo = null;
    },
    filterTodos: (state, action: PayloadAction<string>) => {
      // action.payload  // all, todo, done
      state.filter = action.payload;
    },
  },
});

export const {
  setInitialData,
  addTodo,
  editTodo,
  selectTodo,
  deleteTodo,
  filterTodos,
  toggleTodo,
} = todoSlice.actions;

const todoReducer = todoSlice.reducer;

export default todoReducer;
