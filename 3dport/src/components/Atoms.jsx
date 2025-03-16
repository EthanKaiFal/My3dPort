import {React, useMemo} from 'react'
import{ Float, Sphere } from '@react-three/drei'
import * as THREE from 'three'
import { Electron } from '../components/Electrons'
import '../index.css'
export const Atom = (props) =>{
  const points = useMemo(() => new THREE.EllipseCurve(0, 0, 3, 1.15, 0, 2 * Math.PI, false, 0).getPoints(100), [])
  return (
    <Float speed={3} rotationIntensity={0.1} floatIntensity={3}>
    <group {...props}>
      <Electron position={[0, 0, 0.5]} speed={6} />
      <Electron position={[0, 0, 0.5]} rotation={[0, 0, Math.PI / 3]} speed={6.5} />
      <Electron position={[0, 0, 0.5]} rotation={[0, 0, -Math.PI / 3]} speed={7} />
      <Sphere args={[0.35, 64, 64]}>
        <meshBasicMaterial color={[6, 0.5, 2]} toneMapped={false} />
      </Sphere>
    </group>
    </Float>
  )
}
