import './App.css'
import Navbar from "./components/Navbar"
import Landing from "./sections/Landing"
import AboutMe from "./sections/AboutMe"
import Career from "./sections/Career"
import Projects from "./sections/Projects"
import Awards from "./sections/Awards"
import Footer from "./sections/Footer"

function App() {
  return (
    <div>
      <Navbar />
      <Landing />
      <AboutMe />
      <Career />
      <Projects />
      <Awards />
      <Footer />
    </div>
  )
}

export default App
