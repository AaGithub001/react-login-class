import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
   <Routes>
    <Route path = "/" element ={<App   />}  />
    <Route path = "/home" element ={<Home    />}  />
   </Routes>
   </BrowserRouter>
  </React.StrictMode>
)
