import React from "react";
import { Todo } from "../types/Todo.type";
import { useAppDispatch } from "@/redux/store";
import { DELETE_TODO, TOGGLE_TODO } from "@/services/todo.service";
import { deleteTodo, selectTodo, toggleTodo } from "@/redux/slices/todoSlice";

type T = {
  todo: Todo;
};
const TodoItem = ({ todo }: T) => {
  const dispatch = useAppDispatch();
  const deleteItem = async (id: number) => {
    const data = await DELETE_TODO(id);
    if (data.isDeleted) {
      dispatch(deleteTodo(id));
    }
  };

  const toggleItem = async (todo: Todo) => {
    const data = await TOGGLE_TODO(todo.id, !todo.completed);

    dispatch(toggleTodo(data));
    console.log("data: ", data);
  };
  return (
    <div className="border-2 rounded-lg p-2 flex  justify-between">
      <h5>{todo.todo}</h5>
      <div className="flex gap-4 items-center">
        <button
          onClick={() => toggleItem(todo)}
          className={`${
            todo.completed ? "border-green-500" : "border-grey-500"
          } h-5 w-5 border-2  rounded flex items-center justify-center`}
        >
          {todo.completed && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="size-4 text-green-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>
          )}
        </button>
        <button onClick={() => dispatch(selectTodo(todo))}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.0}
            stroke="currentColor"
            className="size-5 text-orange-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
          </svg>
        </button>
        <button onClick={() => deleteItem(todo.id)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.0}
            stroke="currentColor"
            className="size-5 text-red-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
