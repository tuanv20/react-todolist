import React, {useState} from 'react';
import 'bootstrap';
import { Routes, Route } from 'react-router-dom';
import Todolist from './components/Todolist/Todolist';
import Welcome from './components/Homepage/Welcome'
import Navbar from './components/Homepage/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path = "/" element = {<Welcome />}>
        </Route>
        <Route path = "/todolist" element = {<Todolist />}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
