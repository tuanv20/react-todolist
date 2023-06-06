import VideoSelect from "../VideoSelect";
import dockerpng from "./img/docker.png";

export default function DockerPage(){
    const videos = [
        {
            title: "Docker Tutorial",
            description: "3 hour Docker Full Course",
            video_id: "docker_tutorial"
        },

        {
            title: "Volumes",
            description: "Persisting Data in Containers with Docker Volumes",
            video_id: "docker_volumes"
        },

        {
            title: "Basic Commands",
            description: "Docker CLI essentials",
            video_id: "docker_volumes"
        },

        {
            title: "Docker Compose",
            description: "Docker Compose Tutorial",
            video_id: "docker_compose"
        },

        {
            title: "Docker and Kubernetes",
            description: "Containerization and Container Orchestration",
            video_id: "docker_k8s"
        },

        {
            title: "Dockerizing a Project",
            description: "Dockerizing a NodeJS + MongoDB App Using docker-compose",
            video_id: "docker_project"
        },
    ]
    return(
        <body>
            <header class="bg-dark py-3">
                <div class="container px-4 px-lg-5 my-5">
                    <div class="text-center text-white">
                        <h1 class="display-9 fw-bolder">Docker Resources</h1>
                    </div>
                </div>
            </header>
            <section class="py-5 bg-light">
                <div class="container px-4 px-lg-5 mt-5 bg-light">
                    <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        {videos.map(function(element) {
                            return <VideoSelect title = {element.title} link = {element.link} desc = {element.description} id = {element.video_id} img = {dockerpng} />
                        })}
                    </div>
                </div>
            </section>  
        </body>
    )
}