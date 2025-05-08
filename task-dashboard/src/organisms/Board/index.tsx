import React from "react";
import styles from "./style.module.css";
import { Task } from "@/modal/common";
import Column from "../column";

type Props = {
  tasks: Task[];
  onDragEnd: any;
};

export default function Board({ tasks }: Props) {
  const statuses = ["To Do", "In Progress", "Done"];

  return (
    <section className={styles.board}>
      {statuses.map((status) => (
        <Column
          key={status}
          status={status}
          tasks={tasks.filter((task) => task.status === status)}
        />
      ))}
    </section>
  );
}
