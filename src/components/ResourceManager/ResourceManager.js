import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css'
import './ResourceManager.css';
import { React, useState } from 'react';
import SidebarButton from './SidebarButton';
import { NavItem } from 'reactstrap';
import ReactPage from './pages/ReactPage';

export default function ResourceManager(){
    const [sidebarWidth, changeWidth] = useState(250);
    const [page, changePage] = useState("");

    let toggleSidebar = function(){
        if(sidebarWidth == 250){
            changeWidth(0);
        }
        else{
            changeWidth(250);
        }
    }

    let renderPage = function(){
        switch(page){
            case 'React': 
                console.log("Displaying React Page")
                return <ReactPage/>;
        }
    }
    
    let displayReact = function(){
        changePage('React');
    }

    return(
        <div>
        <div className = "contentDiv">
            <nav className = 'sidebar' style ={{width:sidebarWidth}}>
                <div className='sideheader'> Resources </div>
                <ul className = 'sidecontent'>
                    {page == 'React' ? 
                    <NavItem className = "resourcelink" style={{color:"#324A5F"}} onClick ={displayReact}> React </NavItem>:
                    <NavItem className = "resourcelink" onClick ={displayReact}> React</NavItem>
                    }
                    <NavItem className = "resourcelink"> SpringBoot</NavItem>
                    <NavItem className = "resourcelink"> Docker</NavItem>
                    <NavItem className = "resourcelink"> BootStrap</NavItem>
                    <NavItem className = "resourcelink"> MySQL</NavItem>
                    <NavItem className = "resourcelink"> Miscellaneous</NavItem>
                </ul>
            </nav>
            {renderPage()}
        </div>
                <SidebarButton togglePressed = {toggleSidebar} width = {sidebarWidth}/>
        </div>
    )
}