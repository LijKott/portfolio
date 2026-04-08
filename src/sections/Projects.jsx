import "../styles/global.css";
import "./Projects.css"
import ProjectComp from "../components/ProjectComp.jsx"

function Projects() {
  return (
    <div id="projects" className="projects-container">
      <div className="projects-box">
        <h1 className="Header"><b>Projects</b></h1>
        <ProjectComp
          projectName={"First Rust Project"}
          link={"https://github.com/LijKott/FirstRustProject"}
          description={"This is an ever changing project that will hold all my learning for rust. I will add to this and change it to reflect what I have learned"}
          skills={["Rust", "Programming"]}
          imageUrl={"https://miro.medium.com/0*Eqqrv9zVpH99X726.png"}
          altText={"Rust Project Image"}
        />
        <ProjectComp
          projectName={"Portfolio"}
          link={"https://github.com/LijKott/portfolio"}
          description={"I made a Portfolio so I can look pretty cool."}
          skills={["HTML", "Javascript", "CSS", "React"]}
          imageUrl={"https://i.sstatic.net/IYZ5MrvW.png"}
          altText={"Portfolio image"}
        />
      </div>
    </div>
  )
}

export default Projects
