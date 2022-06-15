//type rfce
import React, { useState } from "react";
import DisplayForm from "../display/DisplayForm";
import TaskForm from "../taskForm/TaskForm";

function List() {
  const [lists, setList] = useState([]);

  const addTask = (newOne) => {
    const newTasks = [newOne, ...lists];

    setList(newTasks);
    console.log(newOne, ...lists);
    // <DisplayForm newTasks />;
  };
  return (
    <div>
      {/* <DisplayForm /> */}
      <h1>What will be the new Task</h1>
      <TaskForm onSubmit={addTask} />
    </div>
  );
}

export default List;
