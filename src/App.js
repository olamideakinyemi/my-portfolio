import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';


function App() {
  return (
    <div className="font-poppins">
      <Routes>
        <Route  path="/"  element={( <Home />)} /> 
        <Route path="/contact" element={( <Contact />)} />
        <Route path="/projects" element={( <Projects />)} />
      </Routes>
    </div>
  );
}



export default App;






