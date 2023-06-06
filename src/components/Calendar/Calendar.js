import { React, useState, useEffect } from 'react';
import { Calendar, momentLocalizer} from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import TaskService from '../../services/TaskService';
import './Calendar.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useNavigate } from 'react-router-dom';

const localizer = momentLocalizer(moment);

//Calendar component that utilizes the react-big-calendar library
//where frontend is synced with the MySQL database to display tasks
//in real time as they're being updated by the todolist.
export default function TaskCalendar(props){
    const navigate = useNavigate();
    const [events, changeEvents] = useState([]);
    const [tasks, setTasks] = useState([]);

    let agendaPressed = function(){
        navigate("/agenda")
    }

    useEffect( () => {
        TaskService.getAllTasks("").then((response) =>{
            setTasks(response.data);
            return response;
          }).catch( (response) => console.log(response));
    }, [])

    //Fetches all of the tasks and displays them as tasks 
    //with 1 hr lengths (no time display on calendar)
    useEffect( () => {
        let eventArr = [];
        tasks.forEach(task =>{
            let eventObj =
            {
                title: task.taskItem,
                start: new Date(task.dueDate),
                end: new Date(task.dueDate + 3600)
            }
            eventArr.push(eventObj);
        })
        changeEvents(eventArr);
    }, [tasks])

    return (
        <div className = "contentDiv">
            {/* Month view is default and only month view is available (removes unused tabs)
            can add day, week, and agenda to views to re-add tabs*/}
            <Calendar defaultView = 'month' views={['month']} localizer = {localizer} events = {events} startAccessor="start" endAccessor="end" style={{height:'37em'}}/>
            <div className="buttonFooter">
                <button className="btn btn-secondary" onClick = {agendaPressed}> Agenda <i class="bi bi-book"></i></button>
            </div>
        </div>
    )
}