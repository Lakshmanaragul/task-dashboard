import React from "react";
import styles from "./style.module.css";
import Column from "../column";
import { BoardProps } from "@/props";

const Board = ({ tasks }: BoardProps) => {
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
};

export default Board;
