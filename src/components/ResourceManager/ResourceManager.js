import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css'
import './ResourceManager.css';
import { React, useState, useEffect } from 'react';
import SidebarButton from './SidebarButton';
import { NavItem } from 'reactstrap';
import { useNavigate, Link, Outlet } from 'react-router-dom';

export default function ResourceManager(){
    const navigate = useNavigate();
    const [sidebarWidth, changeWidth] = useState(0);
    const [page, changePage] = useState("");

    let toggleSidebar = function(){
        if(sidebarWidth == 250){
            changeWidth(0);
        }
        else{
            changeWidth(250);
        }
    }

    let displayReact = function(){
        changePage("React");
        navigate("/resourcemanager/react");
    }

    return(
        <div>
        <div className = "contentDiv">
            <nav className = 'sidebar' style ={{width:sidebarWidth}}>
                <div className='sideheader'> Resources </div>
                <ul className = 'sidecontent'>
                    {page == 'React' ? 
                    <NavItem className = "resourcelink" onClick = {displayReact} style={{color:"#324A5F"}}> React </NavItem>:
                    <NavItem className = "resourcelink" onClick ={displayReact}> React </NavItem>
                    }
                    <NavItem className = "resourcelink"> SpringBoot</NavItem>
                    <NavItem className = "resourcelink"> Docker</NavItem>
                    <NavItem className = "resourcelink"> BootStrap</NavItem>
                    <NavItem className = "resourcelink"> MySQL</NavItem>
                    <NavItem className = "resourcelink"> Miscellaneous</NavItem>
                </ul>
            </nav>
            <Outlet/>
        </div>
                <SidebarButton togglePressed = {toggleSidebar} width = {sidebarWidth}/>
        </div>
    )
}