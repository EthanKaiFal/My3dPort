import Globe from 'react-globe.gl'
import { Button } from '../components/Button';

const About = () => {
    return(
        <section className="c-space" style={{marginTop:"20px", marginBottom:"20px"}}>
            About
            <div className="grid-setup xl-grid md-grid" style={{display:"grid"}}>
                <div className="grid-item1">
                    <div className="grid-container">
                        <img src="/assets/grid1.png" alt="grid1" className="grid-img"/>
                        <div>
                            <p className="grid-headtext">Hi, I'm Ethan</p>
                            <p className="grid-subtext">With 4 years of college experience and about a year of self learning, I have honed my skills in frontend and backend development, with a focus on cloud computing.  </p>
                        </div>
                    </div>
                </div>
                <div className="grid-item1">
                    <div className="grid-container">
                    <img src="/assets/grid2.png" alt="grid2" className="grid-img"/>
                        <div>
                            <p className="grid-headtext">Tech Stack</p>
                            <p className="grid-subtext">I specialize in, JavaScript/TypeScript with a focus on React and Next.js ecosystems with additional deployment support provided through AWS</p>
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
            </div>
        </section>
    )
}

export default About;