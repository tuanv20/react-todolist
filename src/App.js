import React, { useState } from 'react';
import 'bootstrap';
import { Routes, Route } from 'react-router-dom';
import Todolist from './components/Todolist/Todolist';
import Welcome from './components/Homepage/Welcome'
import Navbar from './components/Homepage/Navbar';
import Calendar from './components/Calendar/Calendar';
import Agenda from './components/Calendar/Agenda';
import ResourceManager from './components/ResourceManager/ResourceManager';
import VideoPage from './components/ResourceManager/VideoPage';
import ReactPage from './components/ResourceManager/resourcepages/ReactPage';

function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path = "/" element = {<Welcome />}/>

        <Route path = "/todolist" element = {<Todolist />}/>

        <Route path = "/calendar" element = {<Calendar />}/>

        <Route path = "/agenda" element = {<Agenda/>}/>

        <Route path = "/resourcemanager" element = {<ResourceManager/>}>
          <Route path ="react" element = {<ReactPage/>}/>
        </Route>

        <Route path = "/videoapi/:id" element = {<VideoPage/>}>
        </Route>

      </Routes>
    </div>
  );
}

export default App;
