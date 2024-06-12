import axios from "axios";
import { toast } from "react-toastify";

export const GET_TODOS = async () => {
  try {
    const { data } = await axios.get("https://dummyjson.com/todos");
    return data;
  } catch (err: any) {
    console.log("err: ", err.message);
  }
};
export const ADD_TODO = async (todo: string, userId: number) => {
  try {
    const res = await axios.post("https://dummyjson.com/todos/add", {
      todo: todo,
      completed: false,
      userId: userId,
    });
    if (res.status === 201) {
      toast.success(`Todo Created!`);
    }
    return res;
  } catch (err: any) {
    console.log("err: ", err.message);
  }
};
export const EDIT_TODO = async (todo: string, id: number) => {
  try {
    const { data } = await axios.put(`https://dummyjson.com/todos/${id}`, {
      todo: todo,
    });
    toast.info("Todo is updated");
    return data;
  } catch (err: any) {
    console.log("err: ", err.message);
  }
};
export const DELETE_TODO = async (id: number) => {
  try {
    const { data } = await axios.delete(`https://dummyjson.com/todos/${id}`);

    if (data.isDeleted) {
      toast.warning(`Todo is deleted!`);
    }
    return data;
  } catch (err: any) {
    console.log("err: ", err.message);
  }
};
export const TOGGLE_TODO = async (id: number, completed: boolean) => {
  try {
    const { data } = await axios.put(`https://dummyjson.com/todos/${id}`, {
      completed: completed,
    });
    toast.info(`Todo is ${data.completed ? "checked" : "unchecked"}`);
    return data;
  } catch (err: any) {
    console.log("err: ", err.message);
  }
};
