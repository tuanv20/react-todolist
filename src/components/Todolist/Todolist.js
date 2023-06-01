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
    const [globalTasks, setTasks] = useState([]);
    const [globalPage, setPage] = useState(1);
  
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

    let updateGlobalTasks = function(tasks){
      setTasks(tasks);
    }

    let updateGlobalPage = function(page){
      setPage(page);
    }

    return ( 
    <div className="App-div">
        <div className="content-div">
        <Navbar filterProp = {filterState} changeRefresh = {refreshPressed} changeFilter = {filterToggle} searchTextCallback = {searchTextCallbackHandler}/>
        <div className='table_div'>
            <TaskList submitProp = {taskListProp} filterProp = {filterState} searchText = {searchText} currPage = {globalPage} updateTasks = {updateGlobalTasks}/>
        </div>
        <div style={{display:'flex', flexDirection:'row'}}>
          <div className='pagesDiv'>
            <PageNav taskProp = {globalTasks} changeGlobalPage = {updateGlobalPage}/>
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
