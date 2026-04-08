import "../styles/global.css"
import "./Award.css"

const Award = ({ awardName, description, skills, imageUrl, altText }) => {

  return (
    <div className='award-container'>
      <img src={imageUrl} alt={altText} className='awardImage' />
      <div>
        <h2>{awardName}</h2>
        <p>{description}</p>
        <div className='skill-tags'>
          {skills.map((skill, index) => (
            <SkillTag key={index} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Award;
