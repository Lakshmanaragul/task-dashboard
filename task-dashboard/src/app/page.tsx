"use client";
import React, { useEffect, useState } from "react";
import { fetchTasks } from "../utils/api";
import { DragDropContext } from "@hello-pangea/dnd";
import { Task } from "@/modal/common";
import Board from "@/organisms/Board";
import AddTaskModal from "@/organisms/taskmodal";
import styles from "./page.module.css";

export default function Home() {
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

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Task Management Dashboard</h1>
        <button className={styles.addButton} onClick={() => setShowModal(true)}>
          + Add New Task
        </button>
      </header>

      {showModal && (
        <AddTaskModal
          onClose={() => setShowModal(false)}
          onAdd={handleAddTask}
        />
      )}

      <DragDropContext onDragEnd={handleDragEnd}>
        <Board tasks={tasks} onDragEnd={handleDragEnd} />
      </DragDropContext>
    </section>
  );
}
