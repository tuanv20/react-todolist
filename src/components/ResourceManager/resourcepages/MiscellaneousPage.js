import VideoSelect from "../VideoSelect"
import miscjpg from "./img/misc.jfif"
export default function MiscellaneousPage(){
    const videos = [
        {
            title: "Kubernetes Tutorial",
            description: "Beginner Kubernetes Tutorial",
            video_id: "misc_tutorial"
        },

        {
            title: "AWS EC2 Tutorial",
            description: "Beginner AWS EC2 Tutorial",
            video_id: "misc_awsec2"
        },

        {
            title: "Relational Databases",
            description: "Fundamentals + Concepts of Relational Databases",
            video_id: "misc_rdb"
        },

        {
            title: "Axios",
            description: "React Axios Library for JS HTTP Requests",
            video_id: "misc_axios"
        },

        {
            title: "CORS Policy",
            description: "Cross-Origin Resource Sharing",
            video_id: "misc_cors"
        },

        {
            title: "Intro to Responsive Design",
            description: "Basics of Responsive Design in Web Apps",
            video_id: "misc_responsive"
        },

        {
            title: "Deploying to fly.io",
            description: "How to Deploy a Docker Container to fly.io ",
            video_id: "misc_fly"
        },

        
    ]
    return(
        <body>
            <header class="bg-dark py-3">
                <div class="container px-4 px-lg-5 my-5">
                    <div class="text-center text-white">
                        <h1 class="display-9 fw-bolder">Miscellaneous Resources</h1>
                    </div>
                </div>
            </header>
            <section class="py-5 bg-light">
                <div class="container px-4 px-lg-5 mt-5 bg-light">
                    <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        {videos.map(function(element) {
                            return <VideoSelect title = {element.title} link = {element.link} desc = {element.description} id = {element.video_id} img = {miscjpg}/>
                        })}
                    </div>
                </div>
            </section>  
        </body>
    )
}