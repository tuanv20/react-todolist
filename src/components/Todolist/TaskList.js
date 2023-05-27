
import React from 'react';
import {useState, useEffect} from 'react';
import TaskItem from './TaskItem';
import 'bootstrap/dist/css/bootstrap.min.css';
import TaskService from '../../services/TaskService'
export default function TaskList(props){
    let [tasks, setTasks] = useState([]);
    let [fetchCount, incFetchCount] = useState(0);

    let update = function(){
      incFetchCount(fetchCount + 1);
    }
    //Fetch the tasks that are currently in the database
    //Depends on fetchCount which will be incremented whenever a change is made to the database
    //and submitProp which will notify the TaskList to refresh when a new task is added
    useEffect(() => {
      console.log("Tasks Fetched");
      if(props.completeProp){
        TaskService.getAllCompletedTasks().then((response) =>{
          setTasks(response.data);
          return response;
        }).catch( (response) => console.log(response.data));
      }
      else{
      TaskService.getAllUnfinishedTasks().then((response) =>{
        setTasks(response.data);
        return response;
      }).catch( (response) => console.log(response.data));
      }
    }, [fetchCount, props.submitProp, props.completeProp])

    //If the update is not fed, return the table row; otherwise, return the update button 
    return (
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
              {tasks.map(function(element){
                return <TaskItem key = {element.id} updateTask = {update} task = {element}/>
              })}
            </tbody>
          </table>
      )
}