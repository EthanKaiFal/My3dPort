import React from 'react'
import NavBar from './sections/NavBar.jsx'
import Hero from './sections/Hero.jsx'
import "./index.css"

const App = () => {
  return (
    <main className='custom-main'>
      <NavBar></NavBar>
      <Hero/>
    </main>
  )
}
export default App