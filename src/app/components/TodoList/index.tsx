"use client";
import React, { useEffect } from "react";
import { Todo } from "../types/Todo.type";
import TodoFilter from "../TodoFilter";
import TodoItem from "../TodoItem";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { setInitialData } from "@/redux/slices/todoSlice";

type T = {
  todos: Todo[];
};
const TodoList = ({ todos }: T) => {
  const reduxTodos = useAppSelector((state) => state.todos.todos);
  const selectedFilter = useAppSelector((state) => state.todos.filter);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setInitialData(todos));
  }, []);

  return (
    <div>
      <h3 className="text-3xl text-center mt-5">TodoList</h3>
      <TodoFilter />

      <div className="flex flex-col gap-3">
        {reduxTodos
          .filter((item) =>
            selectedFilter === "done"
              ? item.completed
              : selectedFilter === "todo"
              ? !item.completed
              : item
          )
          .map((item) => (
            <TodoItem key={item.id} todo={item} />
          ))}
      </div>
    </div>
  );
};

export default TodoList;
