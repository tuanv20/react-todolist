import './Welcome.css'
import { React } from 'react';
import InfoModal from './InfoModal'

//Simple welcome page: div with background image and 
//a centered info modal button
export default function Welcome(){
    return(
        <div className='bg'>
            <InfoModal/>
        </div>
    )
}