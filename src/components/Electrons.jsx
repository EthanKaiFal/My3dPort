import {React, useRef} from 'react'
import{Trail} from '@react-three/drei'
import * as THREE from 'three'
import {useFrame } from '@react-three/fiber'
import '../index.css'
export const Electron= ({ radius = 2.75, speed = 6, ...props }) =>{
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