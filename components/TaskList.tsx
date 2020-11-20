import React from "react";
import { Task } from "../generated/graphql-frontend";
import Link from "next/link";
import TaskItem from "./TaskItem";

interface Props {
  tasks: Task[];
}

export const TaskList: React.FC<Props> = ({ tasks }) => {
  return (
    <ul className="task-list">
      {tasks.map((task) => {
        return <TaskItem key={task.id} task={task} />;
      })}
    </ul>
  );
};
