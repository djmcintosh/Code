import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
//import '@testing-library/jest-dom';

function TodoAPI() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const createTask = (e) => {
    setNewTask(e.target.value);
  };

  // useEffect runs when component mouths and sets the state when request completes
  useEffect(() => {
    axios("https://642f6d34b289b1dec4b2bab7.mockapi.io/api/v1/tasks?id=1").then(
      (data) => setTasks(data.data)
    );
  }, []);

  const handleCreateTask = () => {
    if (!newTask) return;

    setTasks([...tasks, { name: newTask }]);
    setNewTask("");

    axios
      .post("https://642f6d34b289b1dec4b2bab7.mockapi.io/api/v1/tasks/1", {
        title: newTask,
      })
      .then((response) => {
        setTasks([response.data, ...tasks]);
      });
  };

  /* const [tasks, setTasks] = useState([]);
const [newTask, setNewTask] = useState("");

const createTask = (e) => {
  setNewTask(e.target.value);
};

useEffect(() => {
    axios("https://642f6d34b289b1dec4b2bab7.mockapi.io/api/v1/tasks").then((data) =>
      setTasks(data.data)
    );
  }, []); */

  return (
    <div className="myDiv">
      {" "}
      <div className="header">
        <h2>My To Do List</h2>{" "}
        <input onChange={createTask} type="text" placeholder="Add Task" />
        <button className="addBtn" onClick={handleCreateTask}>
          Add
        </button>
      </div>{" "}
      <div id="myUL">
        {" "}
        {tasks.map((task, index) => (
          <ul className="checked">
            <li>{task.tile}</li>
          </ul>
        ))}{" "}
      </div>{" "}
    </div>

    /*   <div id="myDIV">
      <div className="header">
        <h2>My To Do List</h2>
        <input type="text" id="myInput" placeholder="Add Task..."></input>
        <span onClick="newElement()" className="addBtn">
          Add
        </span>
      </div>

      <ul id="myUL">
        <li>Hit the gym</li>
        <li className="checked">Pay bills</li>
        <li>Meet George</li>
        <li>Buy eggs</li>
        <li>Read a book</li>
        <li>Organize office</li>
      </ul>
    </div> */
  );
}

export default TodoAPI;
