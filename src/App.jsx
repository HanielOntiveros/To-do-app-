import { useState } from "react";
import AddTask from "./components/AddTask";
import TaskCard from "./components/TaskCard";

function App() {
  const [tasks, setTasks] = useState([]);
  const [completedTask, setCompletedTask] = useState([]);

  const onAddTask = (newCategory) => {
    setTasks([newCategory, ...tasks]);
  };
  return (
    <>
      <h1>To-do app</h1>
      {/* component for input */}
      <AddTask onNewTask={onAddTask} />
      {/* Show the pending task => add edit pending tasks */}
      <section>
        <div>
          {/* Crear hook para validacion de numeros de tareas pendientes y completas y que se meustre */}
          <h2>{`Pending task:  ${tasks.length}`}</h2>
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
