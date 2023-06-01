
import React from 'react';
import {useState, useEffect} from 'react';
import TaskItem from './TaskItem';
import 'bootstrap/dist/css/bootstrap.min.css';
import TaskService from '../../services/TaskService'
import './Todolist.css';
export default function TaskList(props){
    let [tasks, setTasks] = useState([]);
    let [fetchCount, incFetchCount] = useState(0);
    let currPage = props.currPage;

    let getTasksForPage = function(tasksArr, page){
      let pageTasks = [];
      for(let i = 0; i < tasksArr.length; i++){
        let pagelo = (page - 1) * 5;
        let pagehi = (page * 5);
        if(i >= pagelo && i < pagehi){
          pageTasks.push(tasksArr[i]);
        }
      }
      return pageTasks;
    }
    let update = function(){
      incFetchCount(fetchCount + 1);
    }
    //Fetch the tasks that are currently in the database
    //Depends on fetchCount which will be incremented whenever a change is made to the database
    //and submitProp which will notify the TaskList to refresh when a new task is added
    useEffect(() => {
      console.log(props.filterProp);
      console.log(props.searchText);
      console.log("Tasks Fetched");
      
      switch (props.filterProp){
        case "Completed":
          TaskService.getAllCompletedTasks(props.searchText).then((response) =>{
            setTasks(response.data);
            return response;
          }).catch( (response) => console.log(response));
          break;

        case "Unfinished":
          TaskService.getAllUnfinishedTasks(props.searchText).then((response) =>{
            setTasks(response.data);
            return response;
          }).catch( (response) => console.log(response));
          break;

        default: //All case
          TaskService.getAllTasks(props.searchText).then((response) =>{
            setTasks(response.data);
            return response;
          }).catch( (response) => console.log(response));
          break;
      }
    }, [fetchCount, props.submitProp, props.filterProp, props.searchText, props.currPage])

    //Updates the global task list whenever tasks are updated
    useEffect( () => {
      props.updateTasks(tasks);
    }, [tasks])


    //If the update is not fed, return the table row; otherwise, return the update button 
    return (
          <div className='tasklistcontainer'>
            <table className="table table-hover table-dark rounded-bottom overflow-hidden">
              <thead>
                <tr>  
                  <th className = "text-center">Task</th>
                  <th className = "text-center">Due Date</th>
                  <th className = "text-center">Complete Date</th>
                  <th className = "text-center">Tools</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  {(tasks.length === 0)?<td colSpan="5" className="text-center"> Nothing to do </td> : null}
                </tr>
                {getTasksForPage(tasks, currPage).map(function(element){
                  return <TaskItem key = {element.id} updateTask = {update} task = {element}/>
                })}
              </tbody>
            </table>
          </div>
      )
}