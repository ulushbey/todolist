import { Todo } from "@/app/components/types/Todo.type";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

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
    },
    filterTodos: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
  },
});

export const {
  setInitialData,
  addTodo,
  selectTodo,
  editTodo,
  deleteTodo,
  filterTodos,
} = todoSlice.actions;

const todoReducer = todoSlice.reducer;

export default todoReducer;
