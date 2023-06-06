import VideoSelect from "../VideoSelect"
import reactpng from './img/react.png';
export default function ReactPage(){
    const videos = [
        {
            title: "React Tutorial",
            description: "Simple React Overview",
            video_id: "react_tutorial"
        },

        {
            title: "React Router",
            description: "Reacter Router DOM",
            video_id: "react_router"
        },

        {
            title: "Webdev Portfolio",
            description: "3D Webdev Portfolio React App",
            video_id: "react_webdevportfolio"
        },

        {
            title: "React Roadmap",
            description: "Beginner's Roadmap to React",
            video_id: "react_roadmap"
        },

        {
            title: "Fullstack Project",
            description: "React Full Stack Project Tutorial",
            video_id: "react_fullstack"
        },

        {
            title: "Advanced Hooks",
            description: "Advanced React Hook Tutorial",
            video_id: "react_hooks"
        },

        {
            title: "Component Props",
            description: "How to Pass Data Between Components",
            video_id: "react_props"
        },

        {
            title: "React Libraries",
            description: "Top 10 React Libraries of 2022",
            video_id: "react_libs"
        },

    ]
    return(
        <body>
            <header class="bg-dark py-3">
                <div class="container px-4 px-lg-5 my-5">
                    <div class="text-center text-white">
                        <h1 class="display-9 fw-bolder">React Resources</h1>
                    </div>
                </div>
            </header>

            <section class="py-5 bg-light">
                <div class="container px-4 px-lg-5 mt-5 bg-light">
                    <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        {videos.map(function(element) {
                            return <VideoSelect title = {element.title} link = {element.link} desc = {element.description} id = {element.video_id} img = {reactpng}/>
                        })}
                    </div>
                </div>
            </section>  
        </body>
    )
}
