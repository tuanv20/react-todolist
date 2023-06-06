import React from 'react';
import {useState} from 'react';
import {
    Dropdown,
    DropdownItem,
    DropdownToggle,
    DropdownMenu,
} from 'reactstrap';


//Navbar for todolist: Handles Refresh, Filtering, and Searching functionality 
export default function Navbar(props){
    const [searchText, changeSearchText] = useState("");

    let refreshData = function(){
        changeSearchText("");
        props.changeRefresh();
    }

    let toggleFilterState = function(filter_type){
        props.changeFilter(filter_type);
    }

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(!dropdownOpen);

    let searchHandler = function(){
        props.searchTextCallback(searchText);
    }
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-secondary border border-dark border-2 rounded-top">
            <ul class="navbar-nav">
            {/* Calls the props callback function which tells Todolist to re-render */}
            <li class="nav-link active">
                <a class="nav-link text-light px-4" href="#" onClick={refreshData}>Refresh</a>
            </li>
            <li class = "nav-link">
                <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
                    <DropdownToggle nav caret style={{color: 'white', textDecoration: 'none'}}>
                    {/* Filter dropdown says filter by default, changes to whatever is selected */}
                    {props.filterProp == "" ? "Filter" : props.filterProp}
                    </DropdownToggle>
                    {/* Calls TaskService object (Axios request) depending on value of Dropdown item selected*/}
                    <DropdownMenu>
                        <DropdownItem value = "All" onClick={ (e) => toggleFilterState(e.target.value) }>All</DropdownItem>
                        <DropdownItem divider />

                        <DropdownItem value = "Completed" onClick={ (e) => toggleFilterState(e.target.value) }>Completed</DropdownItem>
                        <DropdownItem divider />

                        <DropdownItem value = "Unfinished" onClick={ (e) => toggleFilterState(e.target.value) }>Unfinished</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </li>
            </ul>
            {/* Calls prop callback to search based on search text and re-render Todolist */}
            <div class="searchbar">
                <input value = {searchText} class="form-control" type="search" placeholder="Search" aria-label="Search" onChange={ (e) => changeSearchText(e.target.value)}></input>
                <button class="btn btn-outline-light" type="submit" onClick={searchHandler}>Search</button>
            </div>
        </nav>
    )   
}