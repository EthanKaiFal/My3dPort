import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const canvas = document.getElementById('canvas');

//scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('#F0F0F0');

//camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 5;

//create objects/mesh
const geometry = new THREE.DodecahedronGeometry();
const material = new THREE.MeshLambertMaterial({color: '#468585', emissive:'#468585'});
const dodecMesh = new THREE.Mesh(geometry,material);

const bodGeo = new THREE.BoxGeometry(2,0.1,2);
const boxMat = new THREE.MeshStandardMaterial({color:'#B4B4B3', emissive: '#B4B4B3'});
const boxMesh = new THREE.Mesh(bodGeo,boxMat);
boxMesh.position.y= -1.5;

scene.add(dodecMesh);
scene.add(boxMesh);

//light
const light = new THREE.SpotLight(0x006769, 100);
light.position.set(1,1,1);
scene.add(light);

//render
const render = new THREE.WebGLRenderer({canvas});
render.setSize(window.innerWidth, window.innerHeight);
render.setPixelRatio(window.devicePixelRatio);
render.render(scene, camera);

//controls
const controls = new OrbitControls(camera, render.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.enableZoom = true;
controls.enablePan = true;

//animations
function animate() {
  requestAnimationFrame(animate);
  dodecMesh.rotation.x+=0.01;
  dodecMesh.rotation.y+=0.01;

  boxMesh.rotation.y+=0.005;

  controls.update();

  render.render(scene,camera);
}

//handle window resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  render.setSize(window.innerWidth, window.innerHeight);
})

animate();
