import React, { useState } from "react";

function TaskForm(props) {
  const [task, setInput] = useState({
    id: "",
    firstname: "",
    lastname: "",
    text: "",
    role: "",
    date: "",
  });

  const saveTask = (e) => {
    // console.log(task.firstname + " " + task.lastname);
  };

  const updateTask = (e) => {
    e.preventDefault();
    setInput({
      ...task,
      [e.target.name]: e.target.value,
    });
    setInput("");
    console.log(task.firstname + " " + task.lastname);
    console.log(task);
  };

  return (
    <div>
      <form className="task-form" onSubmit={updateTask}>
        <label>
          firstName:
          <input
            type="text"
            placeholder="Type in First Name"
            // value={input}
            name="firstname"
            onChange={updateTask}
          />
          lastName:
          <input
            type="text"
            placeholder="Type in Last Name"
            name="lastname"
            onChange={updateTask}
          />
        </label>
        <button className="task-button">Add task</button>
      </form>
    </div>
  );
}

export default TaskForm;
