import React from 'react'
import NavBar from './sections/NavBar.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import MyProjects from './sections/MyProjects.jsx'
import "./index.css"

const App = () => {
  return (
    <main className='custom-main'>
      <NavBar></NavBar>
      <Hero/>
      <About/>
      <MyProjects/>
    </main>
  )
}
export default App