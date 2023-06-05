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
        changePage("React")
        navigate("/resourcemanager/react");
    }

    let displaySpringBoot = function(){
        changePage("SpringBoot")
        navigate("/resourcemanager/springboot");
    }

    let displayDocker = function(){
        changePage("Docker")
        navigate("/resourcemanager/docker");
    }

    let displayBootStrap = function(){
        changePage("BootStrap")
        navigate("/resourcemanager/bootstrap");
    }

    let displayMySQL = function(){
        changePage("MySQL")
        navigate("/resourcemanager/mysql");
    }

    let displayMisc = function(){
        changePage("Misc")
        navigate("/resourcemanager/misc");
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

                    {page == 'SpringBoot' ? 
                    <NavItem className = "resourcelink" onClick = {displaySpringBoot} style={{color:"#324A5F"}}> SpringBoot </NavItem>:
                    <NavItem className = "resourcelink" onClick ={displaySpringBoot}> SpringBoot </NavItem>
                    }

                    {page == 'Docker' ? 
                    <NavItem className = "resourcelink" onClick = {displayDocker} style={{color:"#324A5F"}}> Docker </NavItem>:
                    <NavItem className = "resourcelink" onClick ={displayDocker}> Docker </NavItem>
                    }

                    {page == 'BootStrap' ? 
                    <NavItem className = "resourcelink" onClick = {displayBootStrap} style={{color:"#324A5F"}}> BootStrap </NavItem>:
                    <NavItem className = "resourcelink" onClick ={displayBootStrap}> Docker </NavItem>
                    }

                    {page == 'MySQL' ? 
                    <NavItem className = "resourcelink" onClick = {displayMySQL} style={{color:"#324A5F"}}> MySQL </NavItem>:
                    <NavItem className = "resourcelink" onClick ={displayMySQL}> MySQL </NavItem>
                    }

                    {page == 'Misc' ? 
                    <NavItem className = "resourcelink" onClick = {displayMisc} style={{color:"#324A5F"}}> Miscellaneous </NavItem>:
                    <NavItem className = "resourcelink" onClick ={displayMisc}> Miscellaneous </NavItem>
                    }
                </ul>
            </nav>
            <Outlet/>
        </div>
                <SidebarButton togglePressed = {toggleSidebar} width = {sidebarWidth}/>
        </div>
    )
}