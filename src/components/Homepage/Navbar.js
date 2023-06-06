import React, {useEffect, useMemo, useState} from 'react';
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Nav, 
    NavItem,
    NavLink,  
    Dropdown,
    DropdownItem,
    DropdownToggle,
    DropdownMenu,
} from 'reactstrap';

//Global navbar component that uses react-router-dom useNavigate hook
//to move between different routes throughout the site
export default function Navbar(){
    const navigate = useNavigate();
    const [navigateTodo, changeTodo] = useState(false);
    const [navigateHome, changeHome] = useState(false);
    const [navigateCalendar, changeCalendar] = useState(false);
    const [navigateResourceManager, changeResourceManager] = useState(false);

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(!dropdownOpen);

    let homePressed = function(){
      changeHome(!navigateHome)
    }

    let todoPressed = function(){
      changeTodo(!navigateTodo)
    }

    let calendarPressed = function(){
      changeCalendar(!navigateCalendar)
    }

    let resourceManagerPressed = function(){
      changeResourceManager(!navigateResourceManager);
    }

    //Using useMemo so the navbar doesn't reload everytime we refresh the page (since it's a global component)
    useMemo(() =>{
      navigate("/resourcemanager/homepage")
    }, [navigateResourceManager])

    useMemo(() =>{
      navigate("/todolist")
    }, [navigateTodo])
    
    useMemo(() =>{
      navigate("/calendar")
    }, [navigateCalendar])

    useMemo(() =>{
      navigate("/")
    }, [navigateHome])


    return(
      <Nav className='bg-dark' justified pills>
      <NavItem>
        {/* target = _blank will open the href linked in a new tab */}
        <NavLink href="https://github.com/tuanv20" target = "_blank" style={{color: 'white', textDecoration: 'none'}}>
          Github
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/Tuan_Tran_Resume2022.pdf" target='_blank' style={{color: 'white', textDecoration: 'none'}}>
          Resume
        </NavLink>
      </NavItem>
      <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle nav caret style={{color: 'white', textDecoration: 'none'}}>
          Projects
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={todoPressed}>TodoList</DropdownItem>
          <DropdownItem divider />
          <DropdownItem onClick = {calendarPressed}>Calendar</DropdownItem>
          <DropdownItem divider />
          <DropdownItem onClick = {resourceManagerPressed}>Resource Manager</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <NavItem>
        <NavLink nav caret onClick = {homePressed} style={{color: 'white', textDecoration: 'none', caretColor: 'transparent', cursor: 'pointer'}}>
          Home
        </NavLink>
      </NavItem>
    </Nav>
    )
}