import './App.css';
import React, {useState, useEffect} from 'react';
import TaskList from './components/TaskList';
import 'bootstrap';
import axios from 'axios';
import NewTaskButton from './components/NewTaskButton';
import TaskService from './services/TaskService'
import Navbar from './components/Navbar';

function App() {
  const [taskSubmit, changeTaskSubmit] = useState(0);
  const [completeStatus, changeCompleteStatus] = useState(false);

  let completePressed = function(){
    changeCompleteStatus(!completeStatus)
  }

  let submit = async function(task){
    TaskService.addTask(task).then((response) => {
      changeTaskSubmit(taskSubmit + 1);
    })
  }

  return (
    <div className="App-div">
      <div className="content-div">
        <Navbar changeRefresh = {submit} changeComplete = {completePressed} completeStatus = {completeStatus}/>
        <div className='table_div'>
          <TaskList submitProp = {taskSubmit} completeProp = {completeStatus}/>
        </div>
        <div className='newTaskDiv'>
          <NewTaskButton submitTask = {submit} />
        </div>
      </div>
    </div>
  );
}

export default App;
