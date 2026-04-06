import "../styles/global.css";
import "./ProjectComp.css";
import SkillTag from './SkillTag';

const ProjectComp = ({ projectName, link, description, skills, imageUrl, altText }) => {
  return (
    <div className="project-container">
      <img src={imageUrl} alt={altText} />
      <div>
        <h2><a href={link}>{projectName}</a></h2>
        <p>{description}</p>
        <div className="skill-tags">
          {skills.map((skill, index) => (
            <SkillTag key={index} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectComp
