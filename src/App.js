import React, { useState } from 'react';
import 'bootstrap';
import { Routes, Route } from 'react-router-dom';
import Todolist from './components/Todolist/Todolist';
import Welcome from './components/Homepage/Welcome'
import Navbar from './components/Homepage/Navbar';
import Calendar from './components/Calendar/Calendar';

function App() {
  const [tasksUpdated, updateTasks] = useState(false);
  let taskUpdate = function(){
    console.log("Updating Global Tasks in App and passing prop down");
    updateTasks(!tasksUpdated);
  }

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path = "/" element = {<Welcome />}>
        </Route>

        <Route path = "/todolist" element = {<Todolist globalTasksUpdate = {taskUpdate}/>}>
        </Route>

        <Route path = "/calendar" element = {<Calendar taskProp = {tasksUpdated}/>}>
        </Route>

      </Routes>
    </div>
  );
}

export default App;
