import React from "react";
import { Todo } from "../types/Todo.type";
import TodoFilter from "../TodoFilter";

type T = {
  todos: Todo[];
};
const TodoList = ({ todos }: T) => {
  return (
    <div>
      <h3 className="text-3xl text-center mt-5">TodoList</h3>
      <TodoFilter />
    </div>
  );
};

export default TodoList;
