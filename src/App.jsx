import './App.css'
import Navbar from "./components/Navbar"
import Landing from "./sections/Landing"
import AboutMe from "./sections/AboutMe"
import Career from "./sections/Career"
import Projects from "./sections/Projects"
import Schooling from "./sections/Schooling"
import Footer from "./sections/Footer"

function App() {
  return (
    <div>
      <Navbar />
      <Landing />
      <AboutMe />
      <Career />
      <Projects />
      <Schooling />
      <Footer />
    </div>
  )
}

export default App
