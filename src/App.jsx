import { IoDownloadOutline } from "react-icons/io5"
import AboutMe from "./Pages/AboutMe"
import ContactMe from "./Pages/ContactMe"
import Footer from "./Pages/Footer"
import Home from "./Pages/Home"
import Navbar from "./Pages/Navbar"
import Projects from "./Pages/Projects"
import Skills from "./Pages/Skills"

import resume from "/pdf/resume.pdf"


function App() {

  return (
    <>
      <Navbar></Navbar>

      <div>
        <Home></Home>
      </div>

      <div className="flex justify-center bg-gradient-to-b  from-violet-700/20 py-14 px-6 border-violet-600 border-t-2 rounded-t-3xl">
        <button  className="hvr-underline-from-center hvr-grow hvr-icon-down btn rounded-xl bg-violet-700/10 border-violet-600 hover:bg-violet-700/30 font-bold font-serif px-10">
          <a href={resume} download={"mdparvajmosharof.pdf"}>Resume</a>
          <span className="text-xl hvr-icon"><IoDownloadOutline /></span>

        </button>
      </div>

      <div className="pt-20" id="about">
        <AboutMe></AboutMe>
      </div>

      <div className="pt-20" id="projects">
        <Projects></Projects>
      </div>

      <div className="pt-20" id="skills">
        <Skills></Skills>
      </div>

      <div className="pt-20" id="contact">
        <ContactMe></ContactMe>
      </div>

      <div className="pt-20">
        <Footer></Footer>
      </div>
      
    </>
  )
}

export default App
