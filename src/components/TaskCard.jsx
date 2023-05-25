const TaskCard = ({ tasks }) => {
  // console.log(tasks);

  const onTaskStat = ({ target }) => {
    console.log(target.checked);
  };
  return (
    <div className="task-container">
      {tasks.map((task, i) => {
        return (
          <div key={i} className="task-card">
            <input type="checkbox" onChange={(event) => onTaskStat(event)} />
            <p>{task}</p>
          </div>
        );
      })}
    </div>
  );
};

export default TaskCard;
