
export const Footer = () =>{
    return(
    <section className="c-space footer" id="footer">
        <div className="footer-text-container">
            <p>
                Terms & Conditions
            </p>
            <p>

            </p>
            <p>
                Privacy Policy
            </p>
        </div>
        <div style={{display:'flex', gap:'3px'}}>
            <a href="https://github.com/EthanKaiFal">
            <div className='social-icon'>
                <img src="/assets/github.svg" alt="github" style={{width:"50%", height:"50%"}}/>
            </div>
            </a>
            <a href="https://www.linkedin.com/in/ethan-falconer-4410281ba/">
            <div className='social-icon'>
                <img src="/assets/linkedin.svg" alt="linkedin" style={{width:"50%", height:"50%"}}/>
            </div>
            </a>
        </div>
        <p style={{color:"#ffffff"}}>@ 2025 Ethan. All rights reserved.</p>
    </section>)
}