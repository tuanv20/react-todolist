import VideoSelect from "../VideoSelect"
import springbootpng from './img/springboot.png';
export default function SpringBootPage(){
    const videos = [
        {
            title: "Springboot Tutorial",
            description: "Simple Springboot Overview",
            video_id: "sb_tutorial"
        },
    ]
    return(
        <body>
            <header class="bg-dark py-3">
                <div class="container px-4 px-lg-5 my-5">
                    <div class="text-center text-white">
                        <h1 class="display-9 fw-bolder">SpringBoot Resources</h1>
                    </div>
                </div>
            </header>
            <section class="py-5">
                <div class="container px-4 px-lg-5 mt-5">
                    <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        {videos.map(function(element) {
                            return <VideoSelect title = {element.title} link = {element.link} desc = {element.description} id = {element.video_id} img = {springbootpng} type = "SpringBoot"/>
                        })}
                    </div>
                </div>
            </section>  
        </body>
    )
}
