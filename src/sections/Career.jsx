import "../styles/global.css";
import "./Career.css"
import Jobs from "../components/Jobs.jsx"

function Career() {
  return (
    <div id="career" className="career-container">
      <div className="career-box">
        <h1 className="Header"><b>Career</b></h1>
        <Jobs
          companyName={"Monroe Mountain Marketing"}
          linkedinHandle={"monroe-mountain-marketing"}
          timeWorked={"Jan 13 2026 - Present"}
          description={"I'm currently working as an intern at Monroe Mountain Marketing or MMM. This internship is part of a class I am taking for school at Richfield High School."}
          skills={["Leadership", "Marketing", "Business"]}
          imageUrl={"https://msgsndr-private.storage.googleapis.com/companyPhotos/50107f2e-35f7-49d4-a15c-231e0284161d.png"}
          altText={"Monroe Mountain Marketing"}
        />
        <Jobs
          companyName={"Kotter Data"}
          linkedinHandle={"kotter-data"}
          timeWorked={"May 29 2024 - Present"}
          description={"I am the COO and CTO of Kotter Data. I do IT work for Kotter Tax and Accounting."}
          skills={["Leadership", "Business"]}
          imageUrl={"https://msgsndr-private.storage.googleapis.com/companyPhotos/50107f2e-35f7-49d4-a15c-231e0284161d.png"}
          altText={"Kotter Data"}
        />
      </div>
    </div>
  )
}

export default Career
