import React, {useEffect, useState} from 'react';
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

export default function Navbar(){
    const navigate = useNavigate();
    const [navigateTodo, changeTodo] = useState(false);
    const [navigateHome, changeHome] = useState(false);

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(!dropdownOpen);

    let todoPressed = function(){
        changeTodo(!navigateTodo)
    }

    let homePressed = function(){
        changeHome(!navigateHome)
    }

    useEffect(() =>{
            navigate("/todolist")
    }, [navigateTodo])

    useEffect(() =>{
        navigate("/")
}, [navigateHome])


    return(
      <Nav className='bg-dark' justified pills>
      <NavItem>
        <NavLink href="https://github.com/tuanv20" target = "_blank" style={{color: 'white', textDecoration: 'none'}}>
          Github
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/content/resume" style={{color: 'white', textDecoration: 'none'}}>
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
          <DropdownItem>Project 2</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Project 3</DropdownItem>
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