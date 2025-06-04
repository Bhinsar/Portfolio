import React from 'react'
import Hero from './sections/Hero/Hero'
import About from './sections/About/About'
import Project from './sections/Projects/Project'
import Skills from './sections/Skills/Skills'
import Contact from './sections/Contact/Contact'
import Navbar from './Components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Skills />
      <Contact />
    </>
  )
}

export default App