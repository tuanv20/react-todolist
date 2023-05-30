import './Todolist.css';
import React, {useState} from 'react';
import TaskList from './TaskList';
import 'bootstrap';
import NewTaskButton from './NewTaskButton';
import TaskService from '../../services/TaskService'
import Navbar from './Navbar';

export default function Todolist(){
    const [taskListProp, updateTaskList] = useState(false);
    const [completeStatus, changeCompleteStatus] = useState(false);
  
    let completePressed = function(){
      changeCompleteStatus(!completeStatus)
    }
  
    let refreshPressed = function(){
      updateTaskList(!taskListProp);
    }
  
    let submit = async function(task){
      TaskService.addTask(task).then((response) => {
        updateTaskList(!taskListProp);
      })
    }

    return ( 
    <div className="App-div">
        <div className="content-div">
        <Navbar changeRefresh = {refreshPressed} changeComplete = {completePressed} completeStatus = {completeStatus}/>
        <div className='table_div'>
            <TaskList submitProp = {taskListProp} completeProp = {completeStatus}/>
        </div>
        <div className='newTaskDiv'>
            <NewTaskButton submitTask = {submit} />
        </div>
        </div>
    </div>
    )
}