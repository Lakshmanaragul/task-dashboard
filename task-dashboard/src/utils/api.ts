import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/todos";

export const fetchTasks = async () => {
  const response = await axios.get(API_URL);
  return response.data.slice(0, 10).map((item: any) => ({
    id: item.id,
    title: item.title,
    description: "",
    status: item.completed ? "Done" : "To Do",
  }));
};

export const createTask = async (task: any) => {
  const response = await axios.post(API_URL, task);
  return response.data;
};

export const updateTaskStatus = async (taskId: number, newStatus: string) => {
  const response = await axios.patch(
    `https://jsonplaceholder.typicode.com/todos/${taskId}`,
    {
      completed: newStatus === "Done",
    }
  );
  return response.data;
};
