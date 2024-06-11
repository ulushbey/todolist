import axios from "axios";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";

const Home = async () => {
  // const { data } = await axios.get("https://dummyjson.com/todos");
  // console.log("data", data);

  const data = {
    todos: [
      {
        id: 47,
        todo: "Learn Javascript",
        completed: false,
        userId: 1,
      },
      {
        id: 64,
        todo: "Listen to a new music genre",
        completed: true,
        userId: 1,
      },
    ],
    total: 2,
    skip: 0,
    limit: 2,
  };
  return (
    <main className="w-1/2 mx-auto py-20">
      <TodoInput />
      <TodoList todos={data.todos} />
    </main>
  );
};

export default Home;
