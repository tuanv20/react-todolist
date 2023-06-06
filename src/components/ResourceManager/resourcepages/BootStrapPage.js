import VideoSelect from "../VideoSelect";
import bootstrappng from "./img/bootstrap.png";
export default function BootStrapPage(){
    const videos = [
        {
            title: "Bootstrap Tutorial",
            description: "Full Bootstrap CSS Framework Overview",
            video_id: "bs_tutorial"
        },

        {
            title: "Bootstrap 5",
            description: "Bootstrap 5 Crash Course",
            video_id: "bs_5"
        },

        {
            title: "Landing Page",
            description: "Bootstrap, HTML, and CSS Landing Page",
            video_id: "bs_landingpage"
        },

        {
            title: "React Bootstrap and ReactStrap",
            description: "ReactStrap Library and React + Bootstrap Differences",
            video_id: "bs_reactstrap"
        },
    ]
    return(
        <body>
            <header class="bg-dark py-3">
                <div class="container px-4 px-lg-5 my-5">
                    <div class="text-center text-white">
                        <h1 class="display-9 fw-bolder">Bootstrap Resources</h1>
                    </div>
                </div>
            </header>
            <section class="py-5">
                <div class="container px-4 px-lg-5 mt-5">
                    <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        {videos.map(function(element) {
                            return <VideoSelect title = {element.title} link = {element.link} desc = {element.description} id = {element.video_id} img = {bootstrappng}/>
                        })}
                    </div>
                </div>
            </section>  
        </body>
    )
}