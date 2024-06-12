"use client";
import React, { useEffect, useRef } from "react";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { addTodo, editTodo } from "@/redux/slices/todoSlice";
import { ADD_TODO, EDIT_TODO } from "@/services/todo.service";
const TodoInput = () => {
  const selectedTodo = useAppSelector((state) => state.todos.selectedTodo);
  const ref = useRef<any>(null);

  const dispatch = useAppDispatch();

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (selectedTodo) {
      const data = await EDIT_TODO(ref.current.value, selectedTodo.id);
      dispatch(editTodo(data));
    } else {
      const res = await ADD_TODO(ref.current?.value, 1);
      if (res?.status == 201) {
        dispatch(addTodo(res.data));
      }
    }
    ref.current.value = null;
  };

  useEffect(() => {
    if (selectedTodo) {
      ref.current.value = selectedTodo.todo;
    }
  }, [selectedTodo]);

  console.log("selectedTodo: ", selectedTodo);

  return (
    <div className="space-y-5">
      <h3 className="text-4xl text-center ">Todo Input</h3>
      <form
        onSubmit={submit}
        className="border-2 rounded-lg flex flex-col p-5 gap-3"
      >
        <input
          className="border-2 p-2 text-lg rounded-lg"
          type="text"
          placeholder="New Todo"
          ref={ref}
          required={true}
        />
        <button
          className="bg-green-500 p-2 rounded-lg text-white"
          type="submit"
        >
          {selectedTodo ? "Edit Task" : "Add New Task"}
        </button>
      </form>
    </div>
  );
};

export default TodoInput;
