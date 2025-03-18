import { myProjects } from "../constants/staticInfo"
const MyProjects = () =>{
    const currentProject = myProjects[0];
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
                    </div>
                </div> 
            </div>
        </section>
    )
}

export default MyProjects;