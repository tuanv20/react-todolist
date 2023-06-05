import VideoSelect from "../VideoSelect"
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
        }
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

            <section class="py-5">
                <div class="container px-4 px-lg-5 mt-5">
                    <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        {videos.map(function(element) {
                            return <VideoSelect title = {element.title} link = {element.link} desc = {element.description} id = {element.video_id}/>
                        })}
                    </div>
                </div>
            </section>  
        </body>
    )
}
