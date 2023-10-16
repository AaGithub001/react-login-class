import { useState } from 'react';
import './App.css';
import Login from './components/Login';

function App() {
  const[check, setCheck]=useState(false)
  return (
    <div className="container">
      <h1>Achyut Aryal</h1>
      <Login  />
    </div>
  );
}

export default App;
