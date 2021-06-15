import React from "react";
import { Task } from "../Types";

interface Props {
  task: Task;
  completeTask: (tasknametoDelete: string) => void;
}

export const TodoTask = ({ task, completeTask }: Props) => {
  const { taskName, deadLine } = task;

  return (
    <div className="task">
      <div className="content">
        <span>{taskName}</span>
        <span>{deadLine}</span>
      </div>

      <button onClick={() => completeTask(taskName)}>X</button>
    </div>
  );
};
