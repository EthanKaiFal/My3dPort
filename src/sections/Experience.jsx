import { DirectionalLight } from "three";
import { Canvas } from '@react-three/fiber';
import { myExperiences } from "../constants/staticInfo"
import { OrbitControls, SpotLight } from "@react-three/drei";
import { Suspense, useState } from "react";
import CanvasLoader from "../components/CanvasLoader";
import { Me } from "../components/Developer";

export const Experience = () => {
    const [animationName, setAnimationName] = useState('idle');
    return(
        <section id="Experience" className="c-space" style={{marginTop:20, marginBottom:20}}>
            <div className="experience-container">
                <h3 className='head-text'>What I've Been Up To Since Graduation</h3>
            </div>
            <div className="work-container">
                <div className="work-canvas">
                    <Canvas>
                        <ambientLight intensity={7}/>
                        <SpotLight position={[10,10,10]} angle={0.15} penubra={1}/>
                        <directionalLight position={[10,10,10]} intensity={1}/>
                        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI/2}/>
                        <Suspense fallback={<CanvasLoader/>}>
                            <Me animationName={animationName} position={[0,-3,0]} scale={3}/>

                        </Suspense>
                    </Canvas>
                </div>
                <div className="work-content">
                    <div className="exp-info small-exp-info">
                        {myExperiences.map(({id, icon, name, skill, duration, title, animation})=> (
                            <div key={id} className="work-content_container group" onClick={()=>{setAnimationName(animation.toLowerCase())}} onPointerOver={()=>{setAnimationName(animation.toLowerCase())}} onPointerOut={()=> {setAnimationName('idle')}}>
                                <div className="single-exp-info-container">
                                    <div className="work-content_logo">
                                        <img src={icon} alt="logo" className="exp-img"/>
                                    </div>
                                    <div className="work-content_bar">
                                    <img src={icon} alt="logo" className="exp-img"/>
                                    </div>
                                </div>
                                <div className="exp-content-info">
                                    <p style={{fontWeight:1000, color:"white"}}>{name} </p>
                                    <p style={{fontSize:'14px', lineHeight:'20px', marginBottom:'5px'}}>{skill} -- {duration}</p>
                                    <p className="desc">{title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}