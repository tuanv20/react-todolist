import React, { useState } from 'react';
import 'bootstrap';
import { Routes, Route } from 'react-router-dom';
import Todolist from './components/Todolist/Todolist';
import Welcome from './components/Homepage/Welcome'
import Navbar from './components/Homepage/Navbar';
import Calendar from './components/Calendar/Calendar';
import Agenda from './components/Calendar/Agenda';
import ResourceManager from './components/ResourceManager/ResourceManager';

function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path = "/" element = {<Welcome />}>
        </Route>

        <Route path = "/todolist" element = {<Todolist />}>
        </Route>

        <Route path = "/calendar" element = {<Calendar />}>
        </Route>

        <Route path = "/agenda" element = {<Agenda/>}>
        </Route>

        <Route path = "/resourcemanager" element = {<ResourceManager/>}>
        </Route>

      </Routes>
    </div>
  );
}

export default App;
