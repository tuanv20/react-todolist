import React from 'react';
import {useState} from 'react';
import {
    Dropdown,
    DropdownItem,
    DropdownToggle,
    DropdownMenu,
} from 'reactstrap';

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
            <li class="nav-link active">
                <a class="nav-link text-light px-4" href="#" onClick={refreshData}>Refresh</a>
            </li>
            <li class = "nav-link">
                <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
                    <DropdownToggle nav caret style={{color: 'white', textDecoration: 'none'}}>
                    {props.filterProp == "" ? "Filter" : props.filterProp}
                    </DropdownToggle>
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
            <div class="searchbar">
                <input value = {searchText} class="form-control" type="search" placeholder="Search" aria-label="Search" onChange={ (e) => changeSearchText(e.target.value)}></input>
                <button class="btn btn-outline-light" type="submit" onClick={searchHandler}>Search</button>
            </div>
        </nav>
    )   
}