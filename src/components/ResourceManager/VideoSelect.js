import { useNavigate } from 'react-router-dom';

export default function VideoSelect(props){
    const navigate = useNavigate();

    let watchClicked = function(){
        navigate("/videoapi/" + props.id);
    }
    return (
        <div class="col mb-5">
        <div class="card h-100">
            <img class="card-img-top" src={props.img} alt="..." style={{maxWidth:"275px", maxHeight:"150px"}}/>
            <div class="card-body p-4">
                <div class="text-center">
                    <h5 class="fw-bolder">{props.title}</h5>
                    {props.desc}
                </div>
            </div>
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center"><a class="btn btn-outline-dark mt-auto" onClick={watchClicked}>Watch</a></div>
            </div>
        </div>
    </div>
    )
}