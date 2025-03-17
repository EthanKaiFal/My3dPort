import Globe from 'react-globe.gl'
import { Button } from '../components/Button';
import { useState } from 'react';

const About = () => {
    const [isCopied, setCopied] = useState(false);
    const handleCopy=()=> {
        navigator.clipboard.writeText('ethan.kai.falconer@gmail.com');
        setCopied(true);
        setTimeout(()=>{
            setHasCopied(false);
        }, 2000);
    }
    return(
        <section className="c-space" style={{marginTop:"20px", marginBottom:"20px"}}>
            About
            <div className="xl-grid md-grid bento-setup">
                <div className="grid-item1">
                    <div className="grid-container">
                        <img src="/assets/grid1.png" alt="grid1" className="grid-img"/>
                        <div>
                            <p className="grid-headtext">Hi, I'm Ethan</p>
                            <p className="grid-subtext">With 4 years of college experience and about a year of self learning, I have honed my skills in frontend and backend development, with a focus on cloud computing.  </p>
                        </div>
                    </div>
                </div>
                <div className="grid-item3">
                    <div className="grid-container">
                        <img src="/assets/grid3.png" alt='grid-3' className='grid-img'/>
                            <div style={{color:"white"}}>
                                <p className="grid-headtext">My passion for coding</p>
                                <p clasName="grid-subtext">I enjoy the act of creating projects that I can get great convenient use out of. Coding has been my chosen method of satisfying this desire and I see it as way more than a profession but instead a core method to find satisfaction in life.  </p>
                            </div>

                    </div>
                </div>
                <div className="grid-item2">
                    <div className="grid-container">
                        <div className="grid-box-cont2">
                            <Globe height={326} width={326} 
                            backgroundColor='rgba(0,0,0,0)' 
                            backGroundImageOpacity={0.5} 
                            showAtmosphere showGraticules 
                            globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                            labelsData={[{
                                lat:40, lng:-100,
                                text: "I'm here!",
                                color: 'white',
                                size:20,
                            }]}
                            ></Globe>
                    
                        </div>
                        <p className="grid-headtext">Currently looking to work anywhere in the US.</p>
                            <p className="grid-subtext">I'm currently located in the Los Angeles area but very open to relocation anywhere in the country.</p>
                            <Button name="Contact Me" isBeam/>
                    </div>
                </div>
                <div className="grid-item5">
                    <div className="grid-container">
                    <img src="/assets/grid2.png" alt="grid2" className="grid-img"/>
                        <div>
                            <p className="grid-headtext">Tech Stack</p>
                            <p className="grid-subtext">I specialize in, JavaScript/TypeScript with a focus on React and Next.js ecosystems with additional deployment support provided through AWS</p>
                        </div>
                    </div>
                </div>

                <div className="grid-item4">
                    <div className="grid-container">
                        <img src="assets/grid4.png" alt="grid4" className="grid-img2"/>
                            <div className="custom-space-y">
                                <p className="grid-subtext contact-me">Contact Me</p>
                                <div className = "copy-container" onClick={handleCopy}>
                                    <img src={isCopied? 'assets/tick.svg': 'assets/copy.svg'} alt="copy"></img>
                                    <p style={{color:"white"}}>ethan.kai.falconer@gmail.com</p>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;