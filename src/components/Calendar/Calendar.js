import { React, useState, useEffect } from 'react';
import { Calendar, momentLocalizer} from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import TaskService from '../../services/TaskService';
import './Calendar.css';
import 'bootstrap-icons/font/bootstrap-icons.css'

const localizer = momentLocalizer(moment);

export default function TaskCalendar(props){
    const [events, changeEvents] = useState([]);
    const [tasks, setTasks] = useState([]);

    useEffect( () => {
        console.log("Prop change received: Updating tasks on calendar");
        TaskService.getAllTasks("").then((response) =>{
            setTasks(response.data);
            return response;
          }).catch( (response) => console.log(response));
    }, [props.taskProp])

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
            <Calendar view='month' views={['month']} localizer = {localizer} events = {events} startAccessor="start" endAccessor="end" style={{height:'37em'}}/>
            <div className="buttonFooter">
                <button className="btn btn-success">Refresh <i class="bi bi-arrow-repeat"></i></button>
            </div>
        </div>
    )
}