import './Welcome.css'
import { React } from 'react';
import bg_img from "./background.jpg";
import InfoModal from './InfoModal'
import pfp from './pfp.png';

//Simple welcome page: div with background image and 
//a centered info modal button
export default function Welcome(){
    return(
        <div className='welcomeDiv'>
            <header class="py-5 bg-image-full" style={{backgroundImage: `url(${bg_img})`, caretColor:'transparent'}}>
            <div class="text-center my-5" style={{height:'80vh'}}>
                <img class="img-fluid rounded-circle mb-4" src={pfp} alt="..." style={{maxWidth:"30vh", maxHeight:"30vh"}}/>
                <h1 class="text-white fs-3 fw-bolder">Tuan Tran</h1>
                <div class="mb-0" style={{width:'45%', marginLeft:'auto', marginRight:'auto'}}>
                    <InfoModal/>
                </div>
            </div>
        </header>
        </div>
    )
}