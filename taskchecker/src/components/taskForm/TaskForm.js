import React, { useState } from "react";

function TaskForm(props) {
  const [input, inputSaved] = useState("");

  const saveChange = (e) => {
    inputSaved({ ...input, [e.target.value]: inputSaved });
  };
}

export default TaskForm;
