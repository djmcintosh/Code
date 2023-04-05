import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const createTask = (e) => {
    setNewTask(e.target.value);
  };

  // useEffect runs when component mouths and sets the state when request completes
  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/todos?id=1").then((data) =>
      setTasks(data.data)
    );
  }, []);

  const handleCreateTask = () => {
    if (!newTask) return;

    setTasks([...tasks, { name: newTask }]);
    setNewTask("");

    axios
      .post("https://jsonplaceholder.typicode.com/todos", { title: newTask })
      .then((response) => {
        setTasks([response.data, ...tasks]);
      });
  };

  return (
    <div className="container">
      {" "}
      <div id="newtask">
        {" "}
        <input onChange={createTask} type="text" placeholder="Add Task" />
        <button onClick={handleCreateTask}>Add</button>
      </div>{" "}
      <div id="tasks">
        {" "}
        {tasks.map((task, index) => (
          <div className="task" key={index}>
            {task.title}{" "}
          </div>
        ))}{" "}
      </div>{" "}
    </div>
  );
}

export default App;
