import { useState, useEffect, useRef } from "react"
import "./Navbar.css"
import "../styles/global.css"

function Navbar() {
  const [visible, setVisible] = useState(true)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      setVisible(currentY < lastScrollY.current)
      lastScrollY.current = currentY
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={visible ? "nav-visible" : "nav-hidden"}>
      <h1 className="Name">Elijah Kotter</h1>
      <div className="sections">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#career">Career</a>
        <a href="#projects">Projects</a>
        <a href="#schooling">Schooling</a>
      </div>
      <hr />
    </nav>
  )
}

export default Navbar
