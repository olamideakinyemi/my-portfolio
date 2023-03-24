import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Todolux from './components/cardpages/Todolux';
import Zuri from './components/cardpages/Zuri';
import Todolist from './components/cardpages/Todolist';
import Hng from './components/cardpages/Hng';

function App() {
  return (
    <div className="font-poppins">
      <Routes>
        <Route  path="/"  element={( <Home />)} /> 
        <Route path="/contact" element={( <Contact />)} />
        <Route path="/projects" element={( <Projects />)} />
        <Route path="/projects/todolux" element={( <Todolux />)} />
        <Route path="/projects/zuri" element={( <Zuri />)} />
        <Route path="/projects/todolist" element={( <Todolist />)} />
        <Route path="/projects/hng" element={( <Hng />)} />
      </Routes>
    </div>
  );
}



export default App;






