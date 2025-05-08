import React from "react";
import { Droppable } from "@hello-pangea/dnd";
import styles from "./style.module.css";
import { Task } from "@/modal/common";
import TaskCard from "../taskcard";

type Props = {
  status: string;
  tasks: Task[];
};

export default function Column({ status, tasks }: Props) {
  return (
    <section className={styles.column}>
      <h2 className={styles.title}>{status}</h2>
      <Droppable droppableId={status}>
        {(provided) => (
          <section
            className={styles.taskList}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {tasks.map((task, index) => (
              <TaskCard key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </section>
        )}
      </Droppable>
    </section>
  );
}
