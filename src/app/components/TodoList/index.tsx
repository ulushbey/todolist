import React from "react";
import { Todo } from "../types/Todo.type";
import TodoFilter from "../TodoFilter";
import TodoItem from "../TodoItem";

type T = {
  todos: Todo[];
};
const TodoList = ({ todos }: T) => {
  return (
    <div>
      <h3 className="text-3xl text-center mt-5">TodoList</h3>
      <TodoFilter />

      <div className="flex flex-col gap-3">
        {todos.map((item) => (
          <TodoItem key={item.id} todo={item} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
