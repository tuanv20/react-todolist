import VideoSelect from "../VideoSelect";
import mysqlpng from "./img/mysql.png";
export default function MySQLPage(){
    const videos = [
        {
            title: "MySQL Tutorial",
            description: "Full MySQL Overview",
            video_id: "mysql_tutorial"
        },
        
        {
            title: "Springboot Connection",
            description: "Connecting MySQL Database to Springboot",
            video_id: "mysql_springboot"
        },

        {
            title: "MySQL Workbench",
            description: "Intro to Queries with MySQL Workbench",
            video_id: "mysql_workbench"
        },

        {
            title: "MySQL with Docker Compose",
            description: "Mounting sql.init and Running MySQL Database in Container",
            video_id: "mysql_docker"
        },

        {
            title: "MySQL CLI Tutorial",
            description: "Basics of the MySQL CLI",
            video_id: "mysq1_cli"
        },

        {
            title: "Beginner to Expert Guide",
            description: "20+ hour MySQL tutorial from Beginner to Advanced",
            video_id: "mysql_expert"
        },

    
    ]
    return(
        <body>
            <header class="bg-dark py-3">
                <div class="container px-4 px-lg-5 my-5">
                    <div class="text-center text-white">
                        <h1 class="display-9 fw-bolder">MySQL Resources</h1>
                    </div>
                </div>
            </header>
            <section class="py-5 bg-light">
                <div class="container px-4 px-lg-5 mt-5 bg-light">
                    <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        {videos.map(function(element) {
                            return <VideoSelect title = {element.title} link = {element.link} desc = {element.description} id = {element.video_id} img = {mysqlpng}/>
                        })}
                    </div>
                </div>
            </section>  
        </body>
    )
}