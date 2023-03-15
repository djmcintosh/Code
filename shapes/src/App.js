import './App.css';
import { shapes } from './Shapes';
import React from 'react';

const title ="";
const images = [];

for(const shape in shapes) {
  images.push(
    <img 
       key={shape} 
       className = 'shape'
       alt={shapes[shape].name}
       src={shapes[shape].image}
       role='button'
       onClick={displayName}
    />
  )
}

function displayName(e) {
  const selectedShape = e.target.alt;
  const shapeInfo = shapes[selectedShape];
  
  const name = shapeInfo.name;

  document.getElementById('name').innerHTML = name;

}

function App() {
  return (
    <div className="App">
      <h1>{ title === "" ? "Click on a shape for the name" : title }</h1>
      <p id='name'></p>
      <div className='shapes'>
        {images}
     </div>
    </div>
  );
}

export default App;

