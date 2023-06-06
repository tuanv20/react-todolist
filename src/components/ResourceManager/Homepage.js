
import "./homepage.css";

// Simple homepage component for resource manager.
// Uses techstack.png in /resourcepages/img folder as bg 
export default function HomePage(props){
    return(
    <div className = "homeheader">
        <div class="wrapper">
            <h1>Resource Manager</h1>
            <p class="bio"> Resource Manager is a project I made to organize all of the tutorials and resources 
            I used when I first started building my site. It is fully comprised of Bootstrap + React components 
            and the routing and business logic is handled by the react-router-dom library and React hooks. You can 
            access all of the resources pages through the sidebar on the left. 
            </p>
            <div class="buttonBox">
                <a class="myButton" onClick={props.openSidebar}>Get Started</a>
            </div>
        </div>
    </div>
    )
}