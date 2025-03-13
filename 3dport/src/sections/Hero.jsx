import {React} from 'react'
import '../index.css'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'

const Hero = () => {

  return (
    <section className="hero-section">
        Hero
        <div className="hero-container">
            <p className="greeting-text">Hi, I am Ethan <span>👀</span></p>
            <p className="hero_tag">Building & Supporting Apps</p>
        </div>

        <div className="threejs-container">
                <Canvas className='canvas'>
                    <PerspectiveCamera makeDefault position={[0,0,30]}/>
                    
                </Canvas>
        </div>
    </section>
  )
}
export default Hero;