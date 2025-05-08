import React from "react";
import { Draggable } from "@hello-pangea/dnd";
import "./style.module.css";
import { TaskProps } from "@/props";

const TaskCard = ({ task, index }: TaskProps) => {
  return (
    <Draggable draggableId={String(task.id)} index={index}>
      {(provided) => (
        <section
          className="task-card"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <h4>{task.title}</h4>
          {task.description && <p>{task.description}</p>}
        </section>
      )}
    </Draggable>
  );
};

export default TaskCard;
