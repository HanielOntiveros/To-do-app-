import { useState } from "react";
import AddTask from "./components/AddTask";
import TaskCard from "./components/TaskCard";

function App() {
  const [tasks, setTasks] = useState([]);

  const onAddTask = (newCategory) => {
    setTasks([newCategory, ...tasks]);
  };
  return (
    <>
      <h1>To-do app proyect</h1>
      {/* component for input */}
      <AddTask onNewTask={onAddTask} />
      {/* Show the pending task => add edit pending tasks */}
      <section>
        <div>
          <h2>Pending task</h2>
          <TaskCard tasks={tasks} />
        </div>
      </section>

      {/* Show complete task */}
      <section>
        <div>
          <h2>Completed task</h2>
        </div>
      </section>
    </>
  );
}

export default App;
