import {React, Suspense, useMemo, useRef} from 'react'
import '../index.css'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, Float, Trail, Sphere } from '@react-three/drei'
import {BigRoom} from '../components/BigRoom'
import CanvasLoader from '../components/CanvasLoader'
import * as THREE from 'three'
import {Leva, useControls} from "leva"
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import {useFrame } from '@react-three/fiber'
import {AWSLogo} from "../components/AWS"

const Hero = () => {
  const x = useControls('BigRoom', {
    positionX:{
      value: 2.5,
      min: -30,
      max:10
    },
    positionY:{
      value: 2.5,
      min: -10,
      max:10
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
  })
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
                    <PerspectiveCamera makeDefault position={[0,0,20]}/>
                    <BigRoom 
                    scale={0.7} 
                    position={[5.7,10.0,-199]} 
                    rotation={[3.7, -2.5,3.1]}
                    //rotation={[x.rotationX,x.rotationY,x.rotationZ]}
                    //position={[x.positionX,x.positionY,x.positionZ]}
                    //</Suspense>scale={[x.scale,x.scale, x.scale]}
                    >  
                    </BigRoom>
                        <Atom 
                        rotation={[9.5,2.7,3.3]}
                        scale={0.7}
                        position={[-13.1,5.9,0]}
                        />
                    <AWSLogo
                     rotation={[x.rotationX,x.rotationY,x.rotationZ]}
                    position={[x.positionX,x.positionY,x.positionZ]}
                    scale={[x.scale,x.scale, x.scale]}
                    />
                    <EffectComposer>
                      <Bloom mipmapBlur luminanceThreshold={1} radius={0.7} />
                    </EffectComposer>
                    <ambientLight intensity={1}/>
                    <directionalLight position={[10,10,10]} intensity={0.5}/>
                  </Suspense>
                </Canvas>
        </div>
    </section>
  )
}

function Atom(props) {
  const points = useMemo(() => new THREE.EllipseCurve(0, 0, 3, 1.15, 0, 2 * Math.PI, false, 0).getPoints(100), [])
  return (
    //<Float speed={4} rotationIntensity={1} floatIntensity={2}>
    <group {...props}>
      <Electron position={[0, 0, 0.5]} speed={6} />
      <Electron position={[0, 0, 0.5]} rotation={[0, 0, Math.PI / 3]} speed={6.5} />
      <Electron position={[0, 0, 0.5]} rotation={[0, 0, -Math.PI / 3]} speed={7} />
      <Sphere args={[0.35, 64, 64]}>
        <meshBasicMaterial color={[6, 0.5, 2]} toneMapped={false} />
      </Sphere>
    </group>
    //</Float>
  )
}

function Electron({ radius = 2.75, speed = 6, ...props }) {
  const ref = useRef()
  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed
    ref.current.position.set(Math.sin(t) * radius, (Math.cos(t) * radius * Math.atan(t)) / Math.PI / 1.25, 0)
  })
  return (
    //<Float speed={4} rotationIntensity={1} floatIntensity={2}>
    <group {...props}>
      <Trail  target={ref} local={false} width={5} length={10} color={new THREE.Color(2, 1, 10)} attenuation={(t) => t * t}>
        <mesh ref={ref}>
          <sphereGeometry args={[0.25]} />
          <meshBasicMaterial color={[10, 1, 10]} toneMapped={false} />
        </mesh>
      </Trail>
    </group>
    //</Float>
  )
}

export default Hero;