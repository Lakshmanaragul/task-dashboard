"use client";
import { Task } from "@/modal/common";
import { fetchTasks, updateTaskStatus } from "@/utils";
import { useState, useEffect } from "react";

export const useHandler = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const loadTasks = async () => {
      const data = await fetchTasks();
      setTasks(data);
    };
    loadTasks();
  }, []);

  const handleAddTask = (task: Task) => {
    setTasks((prev) => [...prev, task]);
  };

  const handleDragEnd = async (result: any) => {
    const { source, destination, draggableId } = result;
    if (!destination || source.droppableId === destination.droppableId) return;

    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === +draggableId
          ? { ...task, status: destination.droppableId }
          : task
      )
    );

    const movedTask = tasks.find((task) => task.id === +draggableId);
    if (movedTask) {
      await updateTaskStatus(movedTask.id, destination.droppableId);
    }
  };

  return {
    tasks,
    showModal,
    setShowModal,
    handleAddTask,
    handleDragEnd,
  };
};
