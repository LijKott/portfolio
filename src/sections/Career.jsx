import "../styles/global.css";
import "./Career.css"
import Jobs from "../components/Jobs.jsx"

function Career() {
  return (
    <div id="career" className="career-container">
      <div className="career-box">
        <h1 className="Header"><b>Career</b></h1>
        <Jobs
          companyName={"Microsoft"}
          linkedinHandle={"microsoft"}
          timeWorked={"Jan 12 2024 - Feb 4 2025"}
          description={"Hello"}
          skills={"h"}
          imageUrl={"google.com"}
          altText={"none"}
        />
      </div>
    </div>
  )
}

export default Career
