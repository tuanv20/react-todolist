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
import Resume from './components/Resume/Resume';
function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path = "/" element = {<Welcome />}/>

        <Route path = "/todolist" element = {<Todolist />}/>

        <Route path = "/calendar" element = {<Calendar />}/>

        <Route path = "/agenda" element = {<Agenda/>}/>

        {/* <Route path = "/resume" element = {<object href="/Tuan_Tran_Resume2022.pdf" download>Test</object>}/> */}

        <Route path = "/resourcemanager" element = {<ResourceManager/>}>
          <Route path ="homepage" element = {<HomePage/>}/>
          <Route path ="react" element = {<ReactPage/>}/>
          <Route path ="springboot" element = {<SpringBootPage/>}/>
          <Route path ="docker" element = {<DockerPage/>}/>
          <Route path ="bootstrap" element = {<BootStrapPage/>}/>
          <Route path ="mysql" element = {<MySQLPage/>}/>
          <Route path ="misc" element = {<MiscellaneousPage/>}/>
        </Route>
        <Route path = "/videoapi/:id" element = {<VideoPage/>}>
        </Route>

      </Routes>
    </div>
  );
}

export default App;
