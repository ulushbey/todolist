import { filterTodos } from "@/redux/slices/todoSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import React from "react";

const TodoFilter = () => {
  const selectedFilter = useAppSelector((state) => state.todos.filter);
  const dispatch = useAppDispatch();

  const filterTodo = (type: string) => {
    dispatch(filterTodos(type));
  };
  return (
    <div className="flex justify-evenly gap-5 my-5">
      <button
        onClick={() => filterTodo("all")}
        className={`${
          selectedFilter === "all" ? "bg-green-600" : "bg-green-500"
        } w-full p-2 rounded-lg hover:bg-green-600 text-white`}
      >
        All
      </button>
      <button
        onClick={() => filterTodo("done")}
        className={`${
          selectedFilter === "done" ? "bg-green-600" : "bg-green-500"
        } w-full p-2 rounded-lg hover:bg-green-600 text-white`}
      >
        Done
      </button>
      <button
        onClick={() => filterTodo("todo")}
        className={`${
          selectedFilter === "todo" ? "bg-green-600" : "bg-green-500"
        } w-full p-2 rounded-lg hover:bg-green-600 text-white`}
      >
        Todo
      </button>
    </div>
  );
};

export default TodoFilter;
