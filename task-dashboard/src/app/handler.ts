"use client";
import { Task } from "@/modal/common";
import { fetchTasks } from "@/utils";
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

  const handleDragEnd = (result: any) => {
    const { source, destination } = result;
    if (!destination) return;

    const updatedTasks = [...tasks];
    const movedTask = updatedTasks.find((t) => t.id === +result.draggableId);
    if (movedTask) {
      movedTask.status = destination.droppableId as any;
      setTasks(updatedTasks);
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
