import React, { useState } from "react";

function TaskForm(props) {
  const [input, setInput] = useState("");

  const savedChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const saveTask = (e) => {
    e.preventDefault();

    props.onSubmit({
      inputs: input,
    });

    setInput("");
  };

  return (
    <form className="task-form" onSubmit={saveTask}>
      <input
        type="text"
        placeholder="add task"
        // value={input}
        name="text"
        className="task-input"
        onChange={savedChange}
      ></input>
      <input
        type="text"
        placeholder="add name"
        // value={input}
        name="name"
        className="task-input"
        onChange={savedChange}
      ></input>
      <button className="task-button">Add task</button>
    </form>
  );
}

export default TaskForm;
