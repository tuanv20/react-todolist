import './pages.css';
import 'bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
export default function VideoPage(){
    const navigate = useNavigate();
    const params = useParams();
    const vid_id = params.id;
    const videos = 
        {
            react_tutorial: "https://www.youtube.com/embed/Dorf8i6lCuk",
            react_router: "https://www.youtube.com/embed/Ul3y1LXxzdU",
            react_webdevportfolio: "https://www.youtube.com/embed/0fYi8SGA20k",
            react_roadmap: "https://www.youtube.com/embed/xoh_L3KPpks",
            react_fullstack: "https://www.youtube.com/embed/9i1gQ7w2V24",
        }
    return(
        <div>
            <div className='pageDiv'>
                <button className = 'btn btn-success backButton' onClick ={() => navigate("/resourcemanager/react")}>Back</button>
                <div className="pageContentDiv">
                    <div className="videoDiv">
                        <div class="ratio ratio-16x9">
                            <iframe src={videos[vid_id]} title="YouTube video" allowFullScreen = "true"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}