import "./todo2.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Todo2() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // useEffect runs when component mouths and sets the state when request completes
  useEffect(() => {
    axios("https://642f6d34b289b1dec4b2bab7.mockapi.io/api/v1/tasks").then(
      (data) => setTasks(data.data)
    );
  }, []);

  const createTask = (e) => {
    setNewTask(e.target.value);
  };

  const handleCreateTask = () => {
    console.log(tasks);

    if (!newTask) return;

    setNewTask("");

    axios
      .post("https://642f6d34b289b1dec4b2bab7.mockapi.io/api/v1/tasks/", {
        title: newTask,
        completed: false,
      })
      .then((response) => {
        setTasks([response.data, ...tasks]);
      });
  };

  const handleRemoveTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));

    axios.delete(
      "https://642f6d34b289b1dec4b2bab7.mockapi.io/api/v1/tasks/" + taskId
    );
  };

  const handleChangeTaskStatus = (taskId) => {
    const taskList = tasks.map((task, index) => {
      const taskCompleted = task.completed ? false : true;
      if (task.id === taskId) {
        // Create a *new* object with changes
        return { ...task, completed: taskCompleted };
      } else {
        // No changes
        return task;
      }
    });

    setTasks(taskList);

    const task = taskList.find((task) => task.id === taskId);
    if (task) {
      axios.put(
        "https://642f359ac26d69edc8789753.mockapi.io/api/v1/tasks/" + taskId,
        task
      );
    }
  };

  return (
    <div>
      <div id="myDIV" className="header">
        <h2>My To Do List</h2>
        <input
          className="taskInput"
          type="text"
          value={newTask}
          onChange={createTask}
          id="myInput"
          placeholder="Title..."
        />

        <span onClick={handleCreateTask} className="addBtn">
          Add
        </span>
      </div>

      <ul id="myUL">
        {tasks.map((task, index) => (
          <li>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleChangeTaskStatus(task.id)}
            />
            {task.title}
            <span className="close" onClick={() => handleRemoveTask(task.id)}>
              X
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo2;
