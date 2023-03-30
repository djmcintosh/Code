import "./App.css";
import { shapes } from "./Shapes";
import React from "react";
import { useState } from "react";

function Shape({ key, shape, handleDisplayName }) {
  return (
    <div>
      <img
        className="shape"
        alt={shape.name}
        src={shape.image}
        role="button"
        onClick={handleDisplayName}
      />
    </div>
  );
}/images/circle.jpeg

function App() {
  const [name, setName] = useState([]);

  const handleDisplayName = (e) => {
    setName(e.target.alt);
  };

  return (
    <div className="App">
      <h1>Click on a shape for the name</h1>
      <p>{name}</p>
      <div className="shapes">
        {Object.keys(shapes).map((shape, index) => (
          <Shape
            key={index}
            shape={shapes[shape]}
            handleDisplayName={handleDisplayName}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
