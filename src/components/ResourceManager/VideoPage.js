import './videopage.css';
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
            react_hooks: "https://www.youtube.com/embed/324czHa9O9U",
            react_props: "https://www.youtube.com/embed/e2OLRdJKnEg",
            react_libs: "https://www.youtube.com/embed/gkKGlYRVd8A",
            sb_tutorial: "https://www.youtube.com/embed/9SGDpanrc8U",
            sb_mvc: "https://www.youtube.com/embed/qHerCgPQ2e8", 
            sb_jdbc: "https://www.youtube.com/embed/vovvcvcUkVI",
            sb_jpa: "https://www.youtube.com/embed/Zyqpo8gxSO0",
            sb_annotations: "https://www.youtube.com/embed/htyq-mER0AE",
            sb_frontend: "https://www.youtube.com/embed/_CLLw3QAuOE",
            sb_mavenpom: "https://www.youtube.com/embed/KonKQOXrCyA",
            docker_tutorial: "https://www.youtube.com/embed/3c-iBn73dDE",
            docker_volumes: "https://www.youtube.com/embed/kXb7WAl1YN4",
            docker_cli: "https://www.youtube.com/embed/xGn7cFR3ARU", 
            docker_compose: "https://www.youtube.com/embed/DX1T-PKHKhg",
            docker_k8s: "https://www.youtube.com/embed/Wf2eSG3owoA",
            docker_project: "https://www.youtube.com/embed/vm3YfOHf_Cc",
            bs_tutorial: "https://www.youtube.com/embed/-qfEOE4vtxE",
            bs_5: "https://www.youtube.com/embed/4sosXZsdy-s",
            bs_landingpage: "https://www.youtube.com/embed/3e8p0R5-b5A",
            bs_reactstrap: "https://www.youtube.com/embed/WAO76xIfypg",
            mysql_tutorial: "https://www.youtube.com/embed/7S_tz1z_5bA",
            mysql_springboot: "https://www.youtube.com/embed/xRH_YtzErhU",
            mysql_workbench: "https://www.youtube.com/embed/WzMjd3AOX8U",
            mysql_docker: "https://www.youtube.com/embed/kphq2TsVRIs",
            mysql_cli: "https://www.youtube.com/embed/e62RicDmjcY",
            mysql_expert: "https://www.youtube.com/embed/en6YPAgc6WM",
            misc_k8s: "https://www.youtube.com/embed/X48VuDVv0do",
            misc_awsec2: "https://www.youtube.com/embed/8TlukLu11Yo",
            misc_rdb: "https://www.youtube.com/embed/Imo6euzPTYU",
            misc_axios: "https://www.youtube.com/embed/qM4G1Ai2ZpE",
            misc_cors: "https://www.youtube.com/embed/h-WtIT6gCBk",
            misc_responsive: "https://www.youtube.com/embed/srvUrASNj0s",
            misc_fly: "https://www.youtube.com/embed/Cl9jRuX1eL0",
        }

        let backNavigate = function(){
            if(vid_id.includes('react')){
                navigate("/resourcemanager/react")
            }
            else if(vid_id.includes('sb')){
                navigate("/resourcemanager/springboot")
            }

            else if(vid_id.includes('docker')){
                navigate("/resourcemanager/docker")
            }
            else if(vid_id.includes('bs')){
                navigate("/resourcemanager/bootstrap")
            }
            else if(vid_id.includes('mysql')){
                navigate("/resourcemanager/mysql")
            }
            else if(vid_id.includes('misc')){
                navigate("/resourcemanager/misc")
            }
        }
    return(
        <div>
            <div className='pageDiv'>
                <button className = 'btn btn-success backButton' onClick ={backNavigate}>Back</button>
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