import React, { useEffect } from "react";
import { Task, useDeleteTaskMutation } from "../generated/graphql-frontend";
import Link from "next/link";

export interface Props {
  task: Task;
}

const TaskItem: React.FC<Props> = ({ task }) => {
  const [deleteTask, { loading, error }] = useDeleteTaskMutation({
    variables: { id: task.id },
    errorPolicy: "all",
    update: (cache, result) => {
      const deletedTask = result.data?.deleteTask;

      if (deletedTask) {
        console.log(cache);
        cache.modify({
          id: cache.identify(deletedTask),
          fields: {},
        });
      }
    },
  });
  const handleDeleteClick = () => {
    deleteTask();
  };

  useEffect(() => {
    if (error) {
      alert("Error occured");
    }
  }, [error]);

  return (
    <li className="task-list-item" key={task.id}>
      <Link href="/update/[id]" as={`/update/${task.id}`}>
        <a className="task-list-item-title">{task.title}</a>
      </Link>
      <button
        onClick={handleDeleteClick}
        disabled={loading}
        className="task-list-item-delete"
      >
        &times;
      </button>
    </li>
  );
};

export default TaskItem;
