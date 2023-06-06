import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css'
import './ResourceManager.css';
import { React, useState, useEffect } from 'react';
import SidebarButton from './SidebarButton';
import { NavItem } from 'reactstrap';
import { useNavigate, Outlet } from 'react-router-dom';
import HomePage from './Homepage';

//Overarching Resource Manager project component,
//renders content of all sub-components/sub-routes and defines global sidebar
export default function ResourceManager(){
    const navigate = useNavigate();
    console.log(window.location.href);
    const [sidebarWidth, changeWidth] = useState(0);
    const [page, changePage] = useState("");

    //Transition value in css file allows for sliding animation
    //Upon width change of the sidebar div 
    let toggleSidebar = function(){
        if(sidebarWidth == 250){
            changeWidth(0);
        }
        else{
            changeWidth(250);
        }
    }

    let displayReact = function(){
        toggleSidebar();
        changePage("React")
        navigate("/resourcemanager/react");
    }

    let displaySpringBoot = function(){
        toggleSidebar();
        changePage("SpringBoot")
        navigate("/resourcemanager/springboot");
    }

    let displayDocker = function(){
        toggleSidebar();
        changePage("Docker")
        navigate("/resourcemanager/docker");
    }

    let displayBootStrap = function(){
        toggleSidebar();
        changePage("BootStrap")
        navigate("/resourcemanager/bootstrap");
    }

    let displayMySQL = function(){
        toggleSidebar();
        changePage("MySQL")
        navigate("/resourcemanager/mysql");
    }

    let displayMisc = function(){
        toggleSidebar();
        changePage("Misc")
        navigate("/resourcemanager/misc");
    }


    return(
        <div>
        <div className = "contentDiv">
            <nav className = 'sidebar' style ={{width:sidebarWidth}}>
                <div className='sideheader'> Resources </div>
                <ul className = 'sidecontent'>
                    {/* Highlights selected resource when clicked and toggles sidebar */}
                    {page == 'React' ? 
                    <NavItem className = "resourcelink" onClick = {displayReact} style={{color:"#324A5F", fontWeight:'bold'}}> React </NavItem>:
                    <NavItem className = "resourcelink" onClick ={displayReact}> React </NavItem>
                    }

                    {page == 'SpringBoot' ? 
                    <NavItem className = "resourcelink" onClick = {displaySpringBoot} style={{color:"#324A5F", fontWeight:'bold'}}> Springboot </NavItem>:
                    <NavItem className = "resourcelink" onClick ={displaySpringBoot}> Springboot </NavItem>
                    }

                    {page == 'Docker' ? 
                    <NavItem className = "resourcelink" onClick = {displayDocker} style={{color:"#324A5F", fontWeight:'bold'}}> Docker </NavItem>:
                    <NavItem className = "resourcelink" onClick ={displayDocker}> Docker </NavItem>
                    }

                    {page == 'BootStrap' ? 
                    <NavItem className = "resourcelink" onClick = {displayBootStrap} style={{color:"#324A5F", fontWeight:'bold'}}> Bootstrap </NavItem>:
                    <NavItem className = "resourcelink" onClick ={displayBootStrap}> Bootstrap </NavItem>
                    }

                    {page == 'MySQL' ? 
                    <NavItem className = "resourcelink" onClick = {displayMySQL} style={{color:"#324A5F", fontWeight:'bold'}}> MySQL </NavItem>:
                    <NavItem className = "resourcelink" onClick ={displayMySQL}> MySQL </NavItem>
                    }

                    {page == 'Misc' ? 
                    <NavItem className = "resourcelink" onClick = {displayMisc} style={{color:"#324A5F", fontWeight:'bold'}}> Miscellaneous </NavItem>:
                    <NavItem className = "resourcelink" onClick ={displayMisc}> Miscellaneous </NavItem>
                    }
                </ul>
            </nav>
            {/* Separate handling of homepage to allow for a prop to be passed in */}
            {window.location.href.includes('homepage') ?
            <HomePage openSidebar = {toggleSidebar}/> :
            //Outlet is replaced by content of the sub-component 
            <Outlet/>
            }
            </div>
                <SidebarButton togglePressed = {toggleSidebar} width = {sidebarWidth}/>
        </div>
    )
}