import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Services from './component/Services'
import About from './component/About'
import Resume from './component/Resume'
import Footer from './component/Footer'

function App() {

  return (
    <>
      {/* <Navbar/> */}
      <Hero/>
      <Services/>
      <About/>
      <Resume/>
      <Footer/>
    </>
  )
}

export default App
