import React, {useState} from 'react';
import 'bootstrap';
import { Routes, Route } from 'react-router-dom';
import Todolist from './components/Todolist/Todolist';
import Welcome from './components/Homepage/Welcome'

function App() {
  return (
    <Routes>
      <Route path = "/" element = {<Welcome />}>
      </Route>

      <Route path = "/todolist" element = {<Todolist />}>
      </Route>
    </Routes>
  );
}

export default App;
