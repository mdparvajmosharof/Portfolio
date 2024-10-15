import { IoDownloadOutline } from "react-icons/io5"
import AboutMe from "./Pages/AboutMe"
import ContactMe from "./Pages/ContactMe"
import Footer from "./Pages/Footer"
import Home from "./Pages/Home"
import Navbar from "./Pages/Navbar"
import Projects from "./Pages/Projects"
import Skills from "./Pages/Skills"

import resume from "/pdf/resume.pdf"
import WhatIDo from "./Pages/WhatIDo"
import Extracurricular from "./Pages/Extracurricular"


function App() {

  return (
    <>
      <Navbar></Navbar>

      <div id="home">
        <Home></Home>
      </div>

      <div className="flex justify-center bg-gradient-to-b  from-violet-700/20 py-14 px-6 border-violet-600 border-t-2 rounded-t-3xl mx-5 lg:mx-0">
        <button  className="hvr-underline-from-center hvr-grow hvr-icon-down btn rounded-xl bg-violet-700/10 border-violet-600 hover:bg-violet-700/30 font-bold font-serif px-10">
          <a href={resume} download={"mdparvajmosharof.pdf"}>Resume</a>
          <span className="text-xl hvr-icon"><IoDownloadOutline /></span>

        </button>
      </div>

      <div className="pt-20 mx-5 lg:mx-0" id="about">
        <AboutMe></AboutMe>
      </div>

      <div className="pt-20 mx-5 lg:mx-0" id="projects">
        <Projects></Projects>
      </div>

      <div className="pt-20 mx-5 lg:mx-0" id="skills">
        <Skills></Skills>
      </div>

      <div className="pt-20 mx-5 lg:mx-0" id="whatido">
        <WhatIDo></WhatIDo>
      </div>

      <div className="pt-20 mx-5 lg:mx-0" id="activities">
        <Extracurricular></Extracurricular>
      </div>

      <div className="pt-20 mx-5 lg:mx-0" id="contact">
        <ContactMe></ContactMe>
      </div>

      <div className="pt-20 mx-5 lg:mx-0">
        <Footer></Footer>
      </div>
      
    </>
  )
}

export default App
