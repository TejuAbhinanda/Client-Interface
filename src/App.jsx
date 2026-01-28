import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import "./App.css";

function App() {
  let name = "Teju";

  function showMessage() {
    alert("Welcome " + name);
  }

  return (
    <div>
      <h1>Hello {name}</h1>
      <button onClick={showMessage}>Click Me</button>
    </div>
  );
}

export default App;




