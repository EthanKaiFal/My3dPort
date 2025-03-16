import {React, useRef} from 'react'
import{Trail} from '@react-three/drei'
import * as THREE from 'three'
import {useFrame } from '@react-three/fiber'
import {easing} from 'maath'
import '../index.css'
export const HeroCam = ({ children }) =>{
    const camRef = useRef();

    useFrame((state, delta) => {
        easing.damp3(state.camera.position, [0,0,20], 0.25, delta);

        easing.dampE(camRef.current.rotation, [state.pointer.y/8,-state.pointer.x/25,0], 0.25, delta);

    })
  return (
    <group ref={camRef}>
        {children}
    </group>
  )
}