"use client";
import React from "react";
import styles from "./style.module.css";
import { useHandler } from "./handler";
import { ModalProps } from "@/props";

const AddTaskModal = ({ onClose, onAdd }: ModalProps) => {
  const {
    description,
    handleSubmit,
    setDescription,
    setTitle,
    title,
    setStatus,
  } = useHandler({
    onClose,
    onAdd,
  });

  return (
    <section className={styles.overlay}>
      <section className={styles.modal}>
        <h3 className={styles.title}>Add New Task</h3>
        <input
          className={styles.input}
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          className={styles.textarea}
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <select
          className={styles.select}
          value={status}
          onChange={(e) => setStatus(e.target.value as any)}
        >
          <option>To Do</option>
          <option>In Progress</option>
          <option>Done</option>
        </select>
        <section className={styles.actions}>
          <button className={styles.addBtn} onClick={handleSubmit}>
            Add Task
          </button>
          <button className={styles.closeBtn} onClick={onClose}>
            Close
          </button>
        </section>
      </section>
    </section>
  );
};
export default AddTaskModal;
