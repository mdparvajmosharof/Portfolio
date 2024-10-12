import AboutMe from "./Pages/AboutMe"
import ContactMe from "./Pages/ContactMe"
import Home from "./Pages/Home"
import Navbar from "./Pages/Navbar"
import Projects from "./Pages/Projects"
import Skills from "./Pages/Skills"


function App() {

  return (
    <>
      <Navbar></Navbar>

      <div>
        <Home></Home>
      </div>

      <div className="flex justify-center bg-gradient-to-b  from-violet-700/20 px-40 border-violet-700 border-t-2 rounded-t-3xl py-5">
        <div>
          <button className="btn px-5">Download</button>
        </div>
      </div>

      <div className="pt-20" id="about">
        <AboutMe></AboutMe>
      </div>

      <div className="pt-20" id="projects">
        <Projects></Projects>
      </div>

      {/* <div className="pt-20" id="projects">
        <Skills></Skills>
      </div> */}

      <div className="pt-20" id="projects">
        <ContactMe></ContactMe>
      </div>

      <div className="h-[2000px]"></div>
    </>
  )
}

export default App
