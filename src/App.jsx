import { useState } from "react";
import { AddTask, TaskCard } from "./components/";

function App() {
  const [tasks, setTasks] = useState([]);
  console.log(tasks);
  const onAddTask = (newCategory) => {
    setTasks([
      {
        value: newCategory,
        status: false,
      },
      ...tasks,
    ]);
    // setTasks([newCategory, ...tasks]);
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
          <TaskCard tasks={tasks} setTasks={setTasks} />
        </div>
      </section>

      {/* Show complete task */}
      <section>
        <div>
          <h2>Completed task</h2>
          {/* <CompletedTaskCard tasks={tasks} /> */}
        </div>
      </section>
    </>
  );
}

export default App;
