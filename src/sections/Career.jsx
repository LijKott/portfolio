import "../styles/global.css";
import "./Career.css"
import Jobs from "../components/Jobs.jsx"

function Career() {
  return (
    <div id="career" className="career-container">
      <div className="career-box">
        <h1 className="Header"><b>Career</b></h1>
        <Jobs
          companyName={"Kotter Data"}
          linkedinHandle={"kotter-data"}
          timeWorked={"May 29 2024 - Present"}
          description={"I am the COO and CTO of Kotter Data. I do IT work for Kotter Tax and Accounting."}
          skills={["Leadership", "Business"]}
          imageUrl={"https://msgsndr-private.storage.googleapis.com/companyPhotos/50107f2e-35f7-49d4-a15c-231e0284161d.png"}
          altText={"Kotter Data"}
        />
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
          companyName={"Kotter Dash"}
          timeWorked={"Dec 3 2025 - May 22 2026"}
          description={"I started a Business for an entrepreneurship class. I did a local doordash business where I would deliever food to those a part of Richfield High. I made a few orders and made a profit of 130 dollars. It was a great introduction to the business world."}
          skills={["Business", "Leadership"]}
          imageUrl={ }
          altText={"Kotter Dash Logo"}
        />
      </div>
    </div>
  )
}

export default Career
