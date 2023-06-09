import { useEffect } from "react";

export const TaskCard = ({ tasks, setTasks }) => {
  const onTaskStat = ({ target }) => {
    const { status } = tasks;
    setTasks((status.value = target.checked));
  };

  return (
    <div className="task-container">
      {tasks.map((task, i) => {
        return (
          <div key={i} className="task-card">
            <input type="checkbox" onChange={(event) => onTaskStat(event)} />
            <p>{task.value}</p>
          </div>
        );
      })}
    </div>
  );
};
