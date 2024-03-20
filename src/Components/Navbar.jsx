import React,{useState} from 'react';
import logo from'../images/logo.png';
import { Link } from 'react-router-dom';
import Feature from './Feature';

function Navbar() {
    const  [nav,setnav]=useState(false);
    const changeBackground=()=>{
        if(window.scrollY >=50){
            setnav(true);
        }
        else{
            setnav(false);
        }
    }

  window.addEventListener('scroll',changeBackground);
  return (
    <>
    <nav className={nav ? 'nav active' : 'nav'}>
        <a href='#' className='logo'>
            <img src={logo} alt=''/>
        </a>
        <input type='checkbox' className='menu-btn' id='menu-btn'/>
        <label className='menu-icon' for='menu-btn'>
            <span className='nav-icon'></span>
        </label>
        <ul className='menu'>
            <li><a href='#' className='active'>Home</a></li>
            {/* <li><a href='#'>Home</a></li>  */}
            <li><a href='#'>Features</a></li> 
             <li><a href='#'>About</a></li>
             <li><a href='#'>Contact Us</a></li>
             {/* <li><Link to="/" className='active'>Home</Link></li>
             <li><Link to="/Feature.jsx">Features</Link></li>
             <li><Link to="/About.jsx">About</Link></li>
             <li><Link to="/Contact.jsx">Contact</Link></li> */}
            
            
        </ul>

        
    </nav>
    
</>
  )
}

export default Navbar;
// import React, { useState, useRef, useEffect } from 'react';
// import logo from '../images/logo.png';
// import { Link } from 'react-router-dom';

// function Navbar() {
//     const [nav, setNav] = useState(false);
//     const [activeLink, setActiveLink] = useState('');

//     const homeRef = useRef(null);
//     const featureRef = useRef(null);
//     const aboutRef = useRef(null);
//     const contactRef = useRef(null);

//     const handleScroll = () => {
//         if (window.scrollY >= 50) {
//             setNav(true);
//         } else {
//             setNav(false);
//         }
//     };

//     useEffect(() => {
//         window.addEventListener('scroll', handleScroll);
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);

//     const handleLinkClick = (ref) => {
//         ref.current.scrollIntoView({ behavior: 'smooth' });
//     };

//     return (
//         <nav className={nav ? 'nav active' : 'nav'}>
//             <a href='#' className='logo'>
//                 <img src={logo} alt=''/>
//             </a>
//             <input type='checkbox' className='menu-btn' id='menu-btn'/>
//             <label className='menu-icon' htmlFor='menu-btn'>
//                 <span className='nav-icon'></span>
//             </label>
//             <ul className='menu'>
//                 <li><Link to="/" onClick={() => handleLinkClick(homeRef)} className={activeLink === 'home' ? 'active' : ''}>Home</Link></li>
//                 <li><Link to="/Feature.jsx" onClick={() => handleLinkClick(featureRef)} className={activeLink === 'feature' ? 'active' : ''}>Features</Link></li>
//                 <li><Link to="/About.jsx" onClick={() => handleLinkClick(aboutRef)} className={activeLink === 'about' ? 'active' : ''}>About</Link></li>
//                 <li><Link to="/Contact.jsx" onClick={() => handleLinkClick(contactRef)} className={activeLink === 'contact' ? 'active' : ''}>Contact</Link></li>
//             </ul>
//             <div ref={homeRef}></div>
//             <div ref={featureRef}></div>
//             <div ref={aboutRef}></div>
//             <div ref={contactRef}></div>
//         </nav>
//     )
// }

// export default Navbar;