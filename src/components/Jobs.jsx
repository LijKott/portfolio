import './Jobs.css';

const Jobs = ({ companyName, linkedinHandle, timeWorked, description, skills, imageUrl, altText }) => {
  const linkedinLink = 'https://www.linkedin.com/company/' + linkedinHandle;
  return (
    <div className='job-container'>
      <h2>{companyName}</h2>
      <h2 className='linkedin'><a href={linkedinLink}>@{linkedinHandle}</a></h2>
      <small>{timeWorked}</small>
      <p>{description}</p>
      {/* Add skills */}
      <img src={imageUrl} alt={altText} className='companyImage' />
    </div>
  );
};

export default Jobs;
