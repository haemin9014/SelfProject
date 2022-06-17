import React, { useState } from "react";

function TaskForm(props) {
  const [saved, savedTask] = useState([]);
  const [name, InputName] = useState("");
  const [texts, InputText] = useState("");
  const updateTask = (e) => {
    e.preventDefault();
    savedTask([
      ...saved,
      {
        id: saved.length,
        name: InputName,
        text: InputText,
        // role: "",
        // date: "",
      },
    ]);
    InputName("");
    InputText("");
    // console.log(saved);
  };

  return (
    <div>
      <form className="task-form" onSubmit={updateTask}>
        <label>
          firstName:
          <input
            type="text"
            placeholder="Type in First Name"
            value={name}
            onChange={(e) => InputName(e.target.value)}
          />
          lastName:
          <input
            type="text"
            placeholder="Type in Last Name"
            value={texts}
            onChange={(e) => InputText(e.target.value)}
          />
        </label>
        <button className="task-button">Add task</button>
      </form>
      <ul>
        {saved.map((task) => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default TaskForm;
