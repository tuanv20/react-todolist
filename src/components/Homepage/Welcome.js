import './Welcome.css'
import { useNavigate } from "react-router-dom";
import {useState, React, useEffect} from 'react';
export default function Welcome(){
    const navigate = useNavigate();
    const [navigateState, changeNavigate] = useState(false);

    let testPushed = function(){
        changeNavigate(!navigateState);
    }

    useEffect(() =>{
        if(navigateState){
            navigate("/todolist");
        }
    }, [navigateState])
    return(
        <div>
            <p>Hello!</p>
            <button onClick = {testPushed}>Test</button>
        </div>
    )
}