import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css'
import './ResourceManager.css';
import { React, useState } from 'react';
import SidebarButton from './SidebarButton';
import { NavItem } from 'reactstrap';

export default function ResourceManager(){
    const [sidebarWidth, changeWidth] = useState(250);

    let toggleSidebar = function(){
        if(sidebarWidth == 250){
            changeWidth(0);
        }
        else{
            changeWidth(250);
        }
    }

    return(
        <div>
        <div className = "contentDiv">
            <nav className = 'sidebar' style ={{width:sidebarWidth}}>
                <div className='sideheader'> Resources </div>
                <ul className = 'sidecontent'>
                    <NavItem>React</NavItem>
                    <NavItem>SpringBoot</NavItem>
                    <NavItem>Docker</NavItem>
                    <NavItem>BootStrap</NavItem>
                    <NavItem>MySQL</NavItem>
                </ul>
            </nav>
        </div>
                <SidebarButton togglePressed = {toggleSidebar} width = {sidebarWidth}/>
        </div>
    )
}