import VideoSelect from "../VideoSelect"
import springbootpng from './img/springboot.png';
export default function SpringBootPage(){
    const videos = [
        {
            title: "Springboot Tutorial",
            description: "Simple Springboot Overview",
            video_id: "sb_tutorial"
        },

        {
            title: "MVC Project",
            description: "Springboot Project using Model-View-Controller Pattern",
            video_id: "sb_mvc"
        },

        {
            title: "JDBC Template",
            description: "Rest APIs in SpringBoot using JDBCTemplate" ,
            video_id: "sb_jdbc"
        },

        {
            title: "JPA Repository",
            description: "Integrating JPA Repository into Springboot App" ,
            video_id: "sb_jpa"
        },

        {
            title: "Annotations",
            description: "40+ Common Springboot Annotations" ,
            video_id: "sb_annotations"
        },

        {
            title: "Maven Frontend Plugin",
            description: "Packaging React App into Springboot Project" ,
            video_id: "sb_frontend"
        },

        {
            title: "Springboot Annotations",
            description: "40+ Common Springboot Annotations" ,
            video_id: "sb_annotations"
        },

        {
            title: "Maven and POM.xml",
            description: "Understanding Maven and POM.xml" ,
            video_id: "sb_mavenpom"
        },
    ]
    return(
        <body>
            <header class="bg-dark py-3">
                <div class="container px-4 px-lg-5 my-5">
                    <div class="text-center text-white">
                        <h1 class="display-9 fw-bolder">Springboot Resources</h1>
                    </div>
                </div>
            </header>
            <section class="py-5 bg-light">
                <div class="container px-4 px-lg-5 mt-5 bg-light">
                    <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        {videos.map(function(element) {
                            return <VideoSelect title = {element.title} link = {element.link} desc = {element.description} id = {element.video_id} img = {springbootpng}/>
                        })}
                    </div>
                </div>
            </section>  
        </body>
    )
}
