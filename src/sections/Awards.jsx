import "../styles/global.css";
import "./Awards.css"

function Awards() {
  return (
    <div id="awards" className="awards-container">
      <div className="awards-box">
        <h1 className="Header"><b>Awards</b></h1>
        <Awards
          awardName={"Hello"}
          description={"Heyyyy"}
          skills={["hello"]}
          imageUrl={"google.com"}
          altText={"hello"}
        />
      </div>
    </div>
  )
}

export default Awards
