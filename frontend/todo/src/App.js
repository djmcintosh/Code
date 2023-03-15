import './App.css';
import React from 'react';


function addTask(e) {
  const taskInput =document.getElementById('task');
  const task = taskInput.value;
  document.getElementById('taskname').innerHTML = task;

}
function App() {
  return ( 
    <div className="container">
    <div id="newtask">
      <input id ="task" type="text" placeholder="Add Tasks" />
      <button id="push" onClick={addTask} >Add</button> 
    </div>
    <div id="tasks">
      <div className="task">
        <span id="taskname"> </span>
      </div>
    </div>
  </div>
  );
}



export default App;
