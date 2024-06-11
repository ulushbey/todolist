import React from "react";

const TodoFilter = () => {
  return (
    <div className="flex justify-evenly gap-5 my-5">
      <button className="bg-green-500 w-full p-2 rounded-lg hover:bg-green-600 text-white">
        ALL
      </button>
      <button className="bg-green-500 w-full p-2 rounded-lg hover:bg-green-600 text-white">
        DONE
      </button>
      <button className="bg-green-500 w-full p-2 rounded-lg hover:bg-green-600 text-white">
        TODO
      </button>
    </div>
  );
};

export default TodoFilter;
