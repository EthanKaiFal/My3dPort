/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export const BigRoom = (props) => {
  const { nodes, materials } = useGLTF('/models/creator_room.glb')
  return (
    <group {...props} dispose={null}>
      <group
        position={[0, 7.514, -95.559]}
        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
        scale={[2.441, 2.441, 37.411]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['switch-window-walls_window_0'].geometry}
          material={materials.window}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['switch-window-walls_window-pane_0'].geometry}
          material={materials['window-pane']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['switch-window-walls_walls_0'].geometry}
          material={materials.walls}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['switch-window-walls_outlets_0'].geometry}
          material={materials.outlets}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['switch-window-walls_floor_0'].geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['switch-window-walls_switch-black_0'].geometry}
          material={materials.material_0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['switch-window-walls_switch-screen_0'].geometry}
          material={materials['switch-screen']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['switch-window-walls_switch-blue_0'].geometry}
          material={materials['switch-blue']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['switch-window-walls_switch-red_0'].geometry}
          material={materials['switch-red']}
        />
      </group>
      <group position={[-77.024, -20.888, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['chair-desk-dslr_dslr_0'].geometry}
          material={materials.dslr}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['chair-desk-dslr_dslr-glass_0'].geometry}
          material={materials['dslr-glass']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['chair-desk-dslr_desk_0'].geometry}
          material={materials.desk}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['chair-desk-dslr_chair-base_0'].geometry}
          material={materials['chair-base']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['chair-desk-dslr_chair_0'].geometry}
          material={materials.chair}
        />
      </group>
      <group position={[12.136, -72.922, -35.909]} rotation={[-Math.PI / 2, 0, 0]} scale={15.93}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['boxes-lamp-trash_trash-can_0'].geometry}
          material={materials['trash-can']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['boxes-lamp-trash_lamps_0'].geometry}
          material={materials.lamps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['boxes-lamp-trash_bulb_0'].geometry}
          material={materials.bulb}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['boxes-lamp-trash_lamp-shade_0'].geometry}
          material={materials['lamp-shade']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['boxes-lamp-trash_boxes-green_0'].geometry}
          material={materials['boxes-green']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['boxes-lamp-trash_boxes-red_0'].geometry}
          material={materials['boxes-red']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['boxes-lamp-trash_boxes-label_0'].geometry}
          material={materials['boxes-label']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['boxes-lamp-trash_boxes-blue_0'].geometry}
          material={materials['boxes-blue']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['boxes-lamp-trash_boxes-label-outer_0'].geometry}
          material={materials['boxes-label-outer']}
        />
      </group>
      <group
        position={[-42.803, 16.788, 69.875]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.794, 19.072, 27.144]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['curtain-noise_curtain-rod_0'].geometry}
          material={materials['curtain-rod']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['curtain-noise_curtain_0'].geometry}
          material={materials.curtain}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['curtain-noise_noise_0'].geometry}
          material={materials.noise}
        />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['camera-computer-cords_cords_0'].geometry}
          material={materials.cords}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['camera-computer-cords_keys-num_0'].geometry}
          material={materials['keys-num']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['camera-computer-cords_keys_0'].geometry}
          material={materials.keys}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['camera-computer-cords_keyboard_0'].geometry}
          material={materials.keyboard}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['camera-computer-cords_monitor_0'].geometry}
          material={materials.monitor}
        />
      </group>
      <group
        position={[-42.803, 16.788, 69.875]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.794, 19.072, 27.144]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['poster-minecraft_poster_0'].geometry}
          material={materials.poster}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['poster-minecraft_minecraft_0'].geometry}
          material={materials.minecraft}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/creator_room.glb')
//export default BigRoom;
