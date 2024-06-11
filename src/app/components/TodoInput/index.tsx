"use client";
import React, { useRef } from "react";

const TodoInput = () => {
  const ref = useRef<HTMLInputElement>(null);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("ref", ref.current?.value);
  };
  return (
    <div className="space-y-5">
      <h3 className="text-4xl text-center">Todo Input</h3>
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
          Add New Task
        </button>
      </form>
    </div>
  );
};

export default TodoInput;
