import { OrbitControls, PerspectiveCamera, Center } from "@react-three/drei";
import { myProjects } from "../constants/staticInfo"
import { React,useEffect,useState, Suspense } from "react";
import { Canvas } from '@react-three/fiber'
import { ProjComputer } from "../components/ProjComputer";
import { CompCam } from "../components/CompCam";
import * as THREE from 'three'
import CanvasLoader from '../components/CanvasLoader'
const MyProjects = () =>{
    const [currentIndex, setCurrentIndex] = useState(0);
    let currentProject = myProjects[currentIndex];
    useEffect(()=>{
        currentProject = myProjects[currentIndex];
    },[currentIndex]);
    const nextProj = () => {
        console.log("ckicked");
        if(currentIndex+1===myProjects.length){
            setCurrentIndex(0);
        }
        else{
        setCurrentIndex((prev)=> prev+1)
        }
        //currentProject=myProjects[currentIndex];
    }

    const prevProj = () => {
        if(currentIndex-1===-1){
            setCurrentIndex(myProjects.length-1);
        }
        else{
        setCurrentIndex((prev)=> prev-1)
        }
        //currentProject=myProjects[currentIndex];
    }
    const scene = new THREE.Scene(); // initialising the scene
    scene.background = new THREE.Color("#505050");
    return(
        <section className="c-space project-section">
            <p className="head-text">My Work</p>
            <div className="grid-container">
                <div className="idk">
                   <div className="proj-img-container">
                    <img src={currentProject.spotlight} alt="spotlight" className="spotlight-proj-img"/>
                    </div> 
                    <div style={ {...currentProject.logoStyle, padding:"3px", backdropFilter:"blur(64px)",width:"fit-content",borderRadius:"0.5rem"}}>
                        <img src={currentProject.logo} alt="logo" className="logo-img"/>
                    </div>
                    <div className="proj-text1">
                        <p className="projTitle">{currentProject.title}</p>
                        <p className='proj-desc'>{currentProject.desc}</p>
                    </div>
                    <div className="proj-other">
                        <div style={{display:'flex', alignItems:'center', gap:3}}>
                            {currentProject.tags.map((tag,index) => (
                                <div key={index} className="tech-logo">
                                    <img src={tag.path} alt={tag.name}></img>
                                </div>
                            ))}
                        </div>
                        <a className="proj-link-container" href={currentProject.href} target="_blank" rel="noreferrer">
                                    <p> Check Live Site</p>
                                    <img src={"/assets/arrow-up.png"} style={{width:15, height:15, marginLeft:5, marginRight:5}} alt="arrow"></img>
                        </a>
                    </div>
                    <div className="left-right-buttons-container">
                        <button className="arrow-btn" onClick={()=>prevProj()}>
                            <img src="assets/left-arrow.png" alt="arrow-left">
                            </img>
                        </button>

                        <button className="arrow-btn" onClick={()=>nextProj()}><img src="assets/right-arrow.png" alt="arrow-right">
                        </img></button>
                    </div>
                </div> 
                <div className="computer-container">
                            <Canvas className="canvas comp-height">
                                
                                <PerspectiveCamera makeDefault position={[0,0.5,2.25]}/>
                                
            
                                <ambientLight intensity={1}/>
                                <directionalLight position={[0,0,3]} intensity={0.5}/>
                                <Center>
                                    <Suspense fallback={<CanvasLoader />}>
                                    <group scale={2} position={[0,-1,0]}>
                                    <ProjComputer  texture={currentProject.texture}/>
                                    </group>

                                    </Suspense>
                                </Center>
                                <OrbitControls maxPolarAngle={Math.PI /2}/>
                            </Canvas>
                </div>
            </div>
        </section>
    )
}

export default MyProjects;