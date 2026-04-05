import './Jobs.css';
import SkillTag from './SkillTag';

const Jobs = ({ companyName, linkedinHandle, timeWorked, description, skills, imageUrl, altText }) => {
  const linkedinLink = 'https://www.linkedin.com/company/' + linkedinHandle;
  return (
    <div className='job-container'>
      <img src={imageUrl} alt={altText} className='companyImage' />
      <div>
        <h2>{companyName} <a className='linkedin' href={linkedinLink}>@{linkedinHandle}</a></h2>
        <small>{timeWorked}</small>
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

export default Jobs;
