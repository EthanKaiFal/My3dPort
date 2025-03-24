import {React, useState} from 'react'
import '../index.css'
import {navLinks} from "../constants/staticInfo.js"

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () =>{
        setIsOpen(prev=> !prev);
    }

    const NavItems = () => {
        return (
            <ul className="nav-ul">
                {navLinks.map((item) => (
                    <li key={item.id} className="nav-li">
                        <a href={item.href} className="nav-li_a">{item.name}</a>
                    </li>
                ))}
            </ul>
        );
    }
  return (
    <header style={{color:"white",position:"fixed", top:0 ,left:0 ,right:0, zIndex:50, background:"black"}}>
        <div style={{maxWidth:"80rem", marginLeft:"auto", marginRight:"auto"}}>
            <div className="c-space" style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginLeft:"auto", marginRight:"right"}}>
            <a href="/" className="home-link">
                Ethan
            </a>

            <nav className="nav-items">
                <NavItems></NavItems>
            </nav>
            </div>
        </div>
    </header>
  )
}
export default NavBar;