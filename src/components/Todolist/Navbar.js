import React from 'react';
import {useState} from 'react';
import TaskService from '../../services/TaskService';

export default function Navbar(props){
    const [completeState, changeCompleteState] = useState(false);
    const [searchText, changeSearchText] = useState("");

    let refreshData = function(){
        props.changeRefresh();
    }

    let toggleComplete = function(){
        changeCompleteState(!completeState);
        props.changeComplete();
    }

    let searchHandler = function(){
        props.searchTextCallback(searchText);
        changeSearchText("");
    }
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-secondary border border-dark border-2 rounded-top">
            <ul class="navbar-nav">
            <li class="nav-link active">
                <a class="nav-link text-light px-4" href="#" onClick={refreshData}>Refresh</a>
            </li>
            {props.completeStatus ? 
            <li class="nav-link active">
                <a class="nav-link text-white px-3" href="#" onClick={toggleComplete}>Completed</a>
            </li>
            : 
            <li class="nav-link active">
                <a class="nav-link text-dark px-3" href="#" onClick={toggleComplete}>Unfinished</a>
            </li>
            }
            </ul>
            <div class="searchbar">
                <input value = {searchText} class="form-control" type="search" placeholder="Search" aria-label="Search" onChange={ (e) => changeSearchText(e.target.value)}></input>
                <button class="btn btn-outline-light" type="submit" onClick={searchHandler}>Search</button>
            </div>
        </nav>
    )   
}