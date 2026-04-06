import "../styles/global.css";
import "./Projects.css"
import ProjectComp from "../components/ProjectComp.jsx"

function Projects() {
  return (
    <div id="projects" className="projects-container">
      <div className="projects-box">
        <h1 className="Header"><b>Projects</b></h1>
        <ProjectComp
          projectName={"Portfolio"}
          link={"https://github.com/LijKott/portfolio"}
          description={"I made a Portfolio so I can look pretty cool."}
          skills={["HTML", "Javascript", "CSS", "React"]}
          imageUrl={"https://i.sstatic.net/IYZ5MrvW.png"}
          altText={"Portfolio"}
        />
      </div>
    </div>
  )
}

export default Projects
