import { useState } from "react";

const AddTask = ({ onNewTask }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    // setTasks((tasks) => [inputValue, ...tasks]);
    inputValue.trim().length >= 1
      ? onNewTask(inputValue)
      : alert("You need to write a new valid task");
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Add a new task"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};

export default AddTask;
