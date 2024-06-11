import React from "react";
import { Todo } from "../types/Todo.type";

type T = {
  todos: Todo[];
};
const TodoList = ({ todos }: T) => {
  return <div>TodoList</div>;
};

export default TodoList;
