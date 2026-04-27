import Globe from 'react-globe.gl'
import { Button } from '../components/Button';
import '../index.css'
import { Canvas } from '@react-three/fiber';
import { myExperiences } from "../constants/staticInfo"
import { OrbitControls, SpotLight } from "@react-three/drei";
import { Suspense, useState, useRef, useEffect} from "react";
import CanvasLoader from "../components/CanvasLoader";
import { Printer } from '../components/Printer';
import { PerspectiveCamera } from '@react-three/drei'

const About = () => {
    const globeEl = useRef();
    useEffect(() => {
        if (globeEl.current) {
            (globeEl.current).pointOfView({ lat: 37, lng: -95, altitude: 1.0 });
        }
    }, [globeEl]);
    const [isCopied, setCopied] = useState(false);
    const handleCopy=()=> {
        navigator.clipboard.writeText('ethan.kai.falconer@gmail.com');
        setCopied(true);
        setTimeout(()=>{
            setHasCopied(false);
        }, 2000);
    }
    return(
        <section className="c-space" id="about" style={{marginTop:"20px", marginBottom:"20px"}}>
            About
            <div className="xl-grid md-grid bento-setup">
                <div className="grid-item1">
                    <div className="grid-container">
                        <img src="/assets/ProPortrait.jpg" alt="grid1" className="grid-img"/>
                        <div>
                            <p className="grid-headtext">Hi, I'm Ethan</p>
                            <p className="grid-subtext">I graduated from the University of Utah with a degree in Computer Science (2020-2024). During my time in school, I developed a strong interest in full-stack development and tailored my coursework to deepen my expertise in that area. Since graduating, I’ve broadened my focus to include the operational side of technology, gaining experience in deployments, sandbox testing, and hardware infrastructure management. As a result, I’ve been honing my skills in both IT/DevOps and full-stack development, giving me a more well-rounded understanding of technology.</p>
                            <p className="grid-subtext">Technology has always been something I find myself drawn to there's something about diagnosing a problem and working through it that genuinely excites me. That curiosity is what pushed me to start learning IT on my own, and it's what's kept me growing ever since. From self-study to real-world experience in healthcare IT, every step has reinforced that this is the right field for me. Outside of work I'm still at it currently studying for my CCNA in order to further enhance my knowledge on the industry.</p>
                        </div>
                    </div>
                </div>
                <div className="grid-item3">
                    <div className="grid-container">
                        <img src="/assets/grid3.png" alt='grid-3' className='grid-img'/>
                            <div style={{color:"white"}}>
                                <p className="grid-headtext">My Time In IT</p>
                                <p className="grid-subtext">My path in IT has been one of steady, linear growth — continuously building on a foundation that started from scratch. The full timeline is detailed further down this page, but to summarize: it all began with online courses and certifications I was studying for from my bedroom.</p>
                                <p className="grid-subtext">While taking those courses I was also able to land a part-time position as a Support Specialist for a small beauty company in Rosemead, CA, where I applied what I was learning in real time — helping the main IT tech with tasks like onboarding and printer/desktop troubleshooting.</p>
                                <p className="grid-subtext">That experience opened the door to my first full-time role as an IT Support Specialist at Prime Healthcare, where my knowledge grew significantly. Working the help desk in a healthcare setting exposed me to nearly every surface-level area of IT — security, networking, application support, system administration, and on-site repairs. I was responsible for working with callers to diagnose issues and either resolve them directly or coordinate with the right team. I was also brought on as an EHR Support Specialist, expanding my responsibilities to include Epic EMR-related issues and giving me hands-on experience supporting one of the more complex software platforms in the industry.</p>
                                <p className="grid-subtext">Outside of work, I've been deepening my networking knowledge by studying for the CCNA, a certification I plan to obtain in the near future. I feel good about where my skills stand and I'm looking forward to bringing them to an on-site team as my next step.</p>
                            </div>

                    </div>
                </div>
                <div className="grid-item2">
                    <div className="grid-container">
                        <div className="grid-box-cont2">
                            <Globe height={326} width={326} 
                            ref={globeEl}
                            cameraAutoRotate={true}
                            cameraRotateSpeed={0.3}
                            animateIn={true}
                            backgroundColor='rgba(0,0,0,0)' 
                            backGroundImageOpacity={0.5} 
                            showAtmosphere showGraticules 
                            globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                            labelsData={[{
                                lat:33.66946, lng:-117.82311,
                                text: "I'm here!",
                                color: 'black',
                                size:500,
                                fontSize:300
                            }]}
                            labelSize={3}
                            ></Globe>
                    
                        </div>
                        <p className="grid-headtext">Currently looking to work anywhere in the US.</p>
                            <p className="grid-subtext">I'm currently located in the Los Angeles area but open to relocation anywhere in the country.</p>
                            <a href="#contact">
                                <Button href="#contact" name="Contact Me" isBeam/>
                            </a>
                            
                    </div>
                </div>
                <div className="grid-item5">
                    <div className="grid-container" style={{gap:"0px"}}>
                    <img src="/assets/grid2.png" alt="grid2" className="grid-img"/>
                        <div>
                            <p className="grid-headtext">Tech Stack</p>
                            <p className="grid-subtext">Backend: Django, Spring, .NET</p>
                            <p className="grid-subtext">Front End: ReactJS, ReactTS, ReactNative, Expo, CSS, Tailwind, ThreeJS</p>
                            <p className="grid-subtext">Database Services:</p>
                            <p className="grid-subtext shifted">SQL- MySQL, PostgreSQL, MariaDB</p>
                            <p className="grid-subtext shifted">NoSQL- MongoDB, Amazon DynamoDB, Firebase</p>
                            <p className="grid-subtext">Languages: Python, Java, Javascript, Typescript, C#, HTML</p>
                            <p className="grid-subtext">Versioning Software: GitHub GitLab</p>
                            <div style={{display:"flex", flexDirection:"row", gap:"15px", justifyContent:"space-around"}}>
                            <img className="waving-hand" style={{height:"200px", width:"80px"}}src="/assets/react.svg"></img>
                            <img className="waving-hand" style={{height:"200px", width:"80px"}} src="/assets/firebase.svg"></img>
                            <img className="waving-hand" style={{height:"200px", width:"80px"}} src="/assets/github.svg"></img>
                            
                            </div>

                        
                        </div>
                    </div>
                </div>

                <div className="grid-item4">
                    <div className="grid-container" style={{display:"flex", flexDirection:"row", gap:'10px', maxHeight:"500px"}}>
                        <Canvas >
                            <PerspectiveCamera makeDefault 
                                                position={[200,300,200]}
                                                // rotation={[x.rotationX,x.rotationY,x.rotationZ]}
                                                // position={[x.positionX,x.positionY,x.positionZ]}
                                                />
                            <directionalLight position={[10,10,10]} intensity={1}/>
                            <OrbitControls enableZoom={false} maxPolarAngle={Math.PI/2}/>
                            <Suspense fallback={<CanvasLoader/>}>
                            <Printer/>
                            </Suspense>
                        </Canvas>
                            <div className="custom-space-y" style={{alignContent:'center'}}>
                                <p className="grid-headtext contact-me" style={{marginBottom:"10%"}}>IT/DevOps Skills</p>
                                <div  onClick={handleCopy} style={{flexDirection:"column", gap:"0px", alignContent:"flex-start", justifyContent:"flex-start"}}>
                                    <p className='grid-subtext'>Troubleshooting Desktops</p>
                                    <p className='grid-subtext'>Setting up and updating various devices</p>
                                    <p className='grid-subtext'>Working with project management/ticketing services such as GitLab and JIRA</p>
                                    <p className='grid-subtext'>Troubleshooting and fixing printers</p>
                                    <p className='grid-subtext'>Managing devices and user accounts through Active Directory</p>
                                    <p className='grid-subtext'>Setting up networks virtually or physically</p>
                                    <p className='grid-subtext'>Certifications: COMPTIA A+, AWS Cloud Practitioner, Network+</p>

                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;