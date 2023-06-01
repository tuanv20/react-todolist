import './Todolist.css';
import React, {useState} from 'react';
import TaskList from './TaskList';
import 'bootstrap';
import NewTaskButton from './NewTaskButton';
import TaskService from '../../services/TaskService'
import Navbar from './Navbar';
import TodoInfo from './TodoInfo';
import PageNav from './PageNav';

export default function Todolist(){
    const [taskListProp, updateTaskList] = useState(false);
    const [filterState, changeFilterState] = useState("");
    const [searchText, changeSearchText] = useState("");
  
    let refreshPressed = function(){
      updateTaskList(!taskListProp);
      changeFilterState("");
      changeSearchText("");
    }

    let searchTextCallbackHandler = function(childSearchText){
      changeSearchText(childSearchText);
    }

    let filterToggle = function(filtertype){
      changeFilterState(filtertype);
    }
  
    let submit = async function(task){
      TaskService.addTask(task).then((response) => {
        updateTaskList(!taskListProp);
      })
    }

    return ( 
    <div className="App-div">
        <div className="content-div">
        <Navbar changeRefresh = {refreshPressed} changeFilter = {filterToggle} searchTextCallback = {searchTextCallbackHandler} filterProp = {filterState}/>
        <div className='table_div'>
            <TaskList submitProp = {taskListProp} filterProp = {filterState} searchText = {searchText}/>
        </div>
        <div style={{display:'flex', flexDirection:'row'}}>
          <div className='pagesDiv'>
            <PageNav/>
          </div>
          <div className='newTaskDiv'>
              <NewTaskButton submitTask = {submit} />
          </div>
        </div>
        </div>
        <div className = 'info-div'>
          <TodoInfo/>
        </div>
    </div>
    )
}
