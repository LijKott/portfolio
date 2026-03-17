import { useState, useEffect } from "react"
import "./Navbar.css"
import "../styles/global.css"

function Navbar() {
  const [visible, setVisible] = useState(true)

  return (
    <nav>
      <h1 className="Name">Elijah Kotter</h1>
      <div className="sections">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#career">Career</a>
        <a href="#projects">Projects</a>
        <a href="#schooling">Schooling</a>
      </div>
    </nav>
  )
}

export default Navbar
