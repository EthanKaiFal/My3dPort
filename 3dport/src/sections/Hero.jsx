import {React, Suspense, useMemo, useRef} from 'react'
import '../index.css'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import {BigRoom} from '../components/BigRoom'
import CanvasLoader from '../components/CanvasLoader'
import {Leva, useControls} from "leva"
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import {AWSLogo} from "../components/AWS"
import {Atom} from "../components/Atoms"
import { VisualLogo } from '../components/VisualStudio'
import * as THREE from 'three'
import { MCDog } from '../components/MCDog'
import { CLogo } from '../components/CLogo'
import { HeroCam } from '../components/HeroCam'
import {Button} from '../components/Button'

const Hero = () => {
  const x = useControls('BigRoom', {
    positionX:{
      value: 2.5,
      min: -200,
      max:300
    },
    positionY:{
      value: 2.5,
      min: -40,
      max:100
    },
    positionZ:{
      value: 2.5,
      min: -300,
      max:10
    },
    scale:{
      value: 1,
      min: 0.1,
      max:10
    },
    rotationX:{
      value: 2.5,
      min: -10,
      max:10
    },
    rotationY:{
      value: 2.5,
      min: -10,
      max:10
    },
    rotationZ:{
      value: 2.5,
      min: -10,
      max:10
    },
  }
  
)

const y = useControls('AWS', {
  positionX:{
    value: 2.5,
    min: -200,
    max:100
  },
  positionY:{
    value: 2.5,
    min: -40,
    max:100
  },
  positionZ:{
    value: 2.5,
    min: -300,
    max:10
  },
  scale:{
    value: 1,
    min: 0.1,
    max:10
  },
  rotationX:{
    value: 2.5,
    min: -10,
    max:10
  },
  rotationY:{
    value: 2.5,
    min: -10,
    max:10
  },
  rotationZ:{
    value: 2.5,
    min: -10,
    max:10
  },
}
)
const scene = new THREE.Scene(); // initialising the scene
scene.background = new THREE.Color("#505050");
  return (
    <section className="hero-section">
        Hero
        <div className="hero-container">
            <p className="greeting-text">Hi, I am Ethan <span>👀</span></p>
            <p className="hero_tag">Building & Supporting Apps</p>
        </div>

        <div className="threejs-container">
        <Leva></Leva>
                <Canvas className='canvas'>
                  <Suspense fallback={<CanvasLoader/>}>
                    <PerspectiveCamera makeDefault 
                    position={[0,0,20]}
                    // rotation={[x.rotationX,x.rotationY,x.rotationZ]}
                    // position={[x.positionX,x.positionY,x.positionZ]}
                    />
                    <HeroCam>
                    <BigRoom 
                    scale={0.7} 
                    position={[5.7,10.0,-199]} 
                    rotation={[3.7, -2.5,3.1]}
                    //rotation={[x.rotationX,x.rotationY,x.rotationZ]}
                    //position={[x.positionX,x.positionY,x.positionZ]}
                    //scale={[x.scale,x.scale, x.scale]}
                    >  
                    </BigRoom>
                    </HeroCam>

                        <Atom 
                    rotation={[3.3,3.3,3.1]}
                    position={[93,29,-4]}
                    scale={6.2}
                        />
                    <AWSLogo
                    rotation={[3.3,2.1,3.1]}
                    position={[-91, -39, -4]}
                    scale={3.3}
                    />
                    <VisualLogo
                    rotation={[3.5,3.3,3.1]}
                    position={[100,-38,10]}
                    scale={6.0}
                    />
                    {/* <MCDog
                    rotation={[3.7,7.1,3.3]}
                    position={[58,17,-226]}
                    scale={0.9}
                    /> */}
                    <CLogo
                    rotation={[3.5,2.5,3.1]}
                    position={[-160,100,-169]}
                    scale={0.9}
                    />
                    <EffectComposer>
                      <Bloom mipmapBlur luminanceThreshold={1} radius={0.7} />
                    </EffectComposer>
                    <ambientLight intensity={1}/>
                    <directionalLight position={[0,0,10]} intensity={0.5}/>
                  </Suspense>
                </Canvas>
        </div>
        <div className="next-section">
                  <a href="#about" style={{width: "fit-content"}}> 
                    <Button name="Let's work together" isBeam>
                    </Button>
                  </a>
                </div>
    </section>
  )
}




export default Hero;