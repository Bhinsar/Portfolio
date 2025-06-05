import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Hero from './sections/Hero/Hero'
import About from './sections/About/About'
import Project from './sections/Projects/Project'
import Skills from './sections/Skills/Skills'
import Contact from './sections/Contact/Contact'
import Navbar from './Components/Navbar'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const mainRef = useRef(null)
  const projectRef = useRef(null)

  useEffect(() => {
    if (mainRef.current && projectRef.current) {
      ScrollTrigger.create({
        trigger: projectRef.current,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => {
          mainRef.current.style.background = '#fff'
          mainRef.current.style.color = '#000'
        },
        onLeaveBack: () => {
          mainRef.current.style.background = '#1f2937' // Tailwind's bg-gray-800
          mainRef.current.style.color = '#fff'
        },
        onLeave: () => {
          mainRef.current.style.background = '#1f2937'
          mainRef.current.style.color = '#fff'
        },
        onEnterBack: () => {
          mainRef.current.style.background = '#fff'
          mainRef.current.style.color = '#000'
        }
      })
    }
  }, [])

  return (
    <main
      ref={mainRef}
      className="bg-gray-900 text-white relative min-h-screen w-screen overflow-x-hidden"
    >
      <Navbar />
      <Hero />
      <About />
      <div ref={projectRef}>
        <Project />
      </div>
      <Skills />
      <Contact />
    </main>
  )
}

export default App