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
import SpringBootPage from './components/ResourceManager/resourcepages/SpringBootPage';
import DockerPage from './components/ResourceManager/resourcepages/DockerPage';
import BootStrapPage from './components/ResourceManager/resourcepages/BootStrapPage';
import MySQLPage from './components/ResourceManager/resourcepages/MySQLPage';
import MiscellaneousPage from './components/ResourceManager/resourcepages/MiscellaneousPage';
import HomePage from './components/ResourceManager/Homepage';

//Overarching App component that defines all of the routes used
//within the site by using react-router-dom library
function App() {

  return (
    <div>
      {/* Navbar component will be global across all rendering of routes*/}
      <Navbar/>
      <Routes>
        <Route path = "/" element = {<Welcome />}/>

        <Route path = "/todolist" element = {<Todolist />}/>

        <Route path = "/calendar" element = {<Calendar />}/>

        <Route path = "/agenda" element = {<Agenda/>}/>

        {/* Nested routes for Resource Manager */}
        <Route path = "/resourcemanager" element = {<ResourceManager/>}>
          <Route path ="homepage" element = {<HomePage/>}/>
          <Route path ="react" element = {<ReactPage/>}/>
          <Route path ="springboot" element = {<SpringBootPage/>}/>
          <Route path ="docker" element = {<DockerPage/>}/>
          <Route path ="bootstrap" element = {<BootStrapPage/>}/>
          <Route path ="mysql" element = {<MySQLPage/>}/>
          <Route path ="misc" element = {<MiscellaneousPage/>}/>
        </Route>

        {/* Route with URL param for serving VideoPages for each unique ID */}
        <Route path = "/videoapi/:id" element = {<VideoPage/>}>
        </Route>

      </Routes>
    </div>
  );
}

export default App;
