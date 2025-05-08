import React from "react";
import { Droppable } from "@hello-pangea/dnd";
import styles from "./style.module.css";
import TaskCard from "../taskcard";
import { ColumnProps } from "@/props";

const Column = ({ status, tasks }: ColumnProps) => {
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
};

export default Column;
