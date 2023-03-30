import "./App.css";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const createTask = (e) => {
    setNewTask(e.target.value);
  };

  const handleCreateTask = () => {
    if (!newTask) return;

    setTasks([...tasks, { name: newTask }]);
    setNewTask("");
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
            {task.name}{" "}
          </div>
        ))}{" "}
      </div>{" "}
    </div>
  );
}

export default App;
