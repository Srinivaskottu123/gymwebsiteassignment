import React, { useState } from "react";
import { Link } from "react-scroll";


function Navbar(){
    const [nav,setnav] = useState(false)
    const changeBackground = ()=>{
        if (window.scrollY>=50){
            setnav(true)
        }
        else{
            setnav(false)
        }
    }
    window.addEventListener('scroll',changeBackground)
    return(
        
        <nav className={nav ? 'nav active':'nav'}>
        <Link to='#' className="logo">
        <img src={'data:image/png;base64,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'}/>
        </Link>
        <input className="menu-btn" type = 'checkbox' id ='menu-btn'></input>
        <label className="menu-icon" for='menu-btn'>
            <span className="nav-icon"></span>
        </label>
        <ul className="menu">
           <li style={{color:'white'}}><Link to='#'>Home</Link></li>
           <li style={{color:'white'}}><Link to='#'>About</Link></li>
           <li style={{color:'white'}}><Link to='#'>Services</Link></li>
           <li style={{color:'white'}}><Link to='#'>Blogs</Link></li>
           <li style={{color:'white'}}><Link to='#'>Contact</Link></li>
        </ul>
        </nav>
    )
}
export default Navbar