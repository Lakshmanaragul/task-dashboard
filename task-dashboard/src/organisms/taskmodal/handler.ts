"use client";
import { ModalProps } from "@/props";
import { createTask } from "@/utils";
import { useState } from "react";

export const useHandler = ({ onClose, onAdd }: ModalProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<"To Do" | "In Progress" | "Done">(
    "To Do"
  );

  const handleSubmit = async () => {
    const newTask = { title, description, status };
    const created = await createTask(newTask);
    onAdd({ ...newTask, id: created.id });
    onClose();
  };

  return {
    handleSubmit,
    title,
    setTitle,
    description,
    setDescription,
    setStatus,
    status,
  };
};
