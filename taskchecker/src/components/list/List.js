//type rfce
import React, { useState } from "react";
import TaskForm from "../taskForm/TaskForm";

function List() {
  const [lists, setList] = useState([]);

  const addTask = (newOne) => {
    const newTasks = [newOne, ...lists];

    setList(newTasks);
    console.log(newOne, ...lists);
  };
  return (
    <div>
      <h1>What will be the new Task</h1>
      <TaskForm onSubmit={addTask} />
      <h2></h2>
    </div>
  );
}

export default List;
