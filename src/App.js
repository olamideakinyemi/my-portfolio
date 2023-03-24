import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Todolux from './components/cardpages/Todolux';
import Dollop from './components/cardpages/Dollop';
import Regform from './components/cardpages/Regform';
import Todolist from './components/cardpages/Todolist';

function App() {
  return (
    <div className="font-poppins">
      <Routes>
        <Route  path="/"  element={( <Home />)} /> 
        <Route path="/contact" element={( <Contact />)} />
        <Route path="/projects" element={( <Projects />)} />
        <Route path="/projects/todolux" element={( <Todolux />)} />
        <Route path="/projects/dollop" element={( <Dollop />)} />
        <Route path="/projects/regform" element={( <Regform />)} />
        <Route path="/projects/todolist" element={( <Todolist />)} />
      </Routes>
    </div>
  );
}



export default App;






