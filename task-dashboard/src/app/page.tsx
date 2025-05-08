"use client";
import React from "react";
import { DragDropContext } from "@hello-pangea/dnd";
import AddTaskModal from "@/organisms/taskmodal";
import styles from "./page.module.css";
import { useHandler } from "./handler";
import Board from "@/organisms/board";

const Home = () => {
  const { handleAddTask, handleDragEnd, setShowModal, showModal, tasks } =
    useHandler();

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
};
export default Home;
