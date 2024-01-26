// Navbar.jsx

import React, { useState, useEffect } from "react";

function Navbar() {
  const darkLogo="../src/assets/image.png"
  const lightLogo="../src/assets/white.png"
  const [scrolling, setScrolling] = useState(false);
  const [Logo,setLogo]=useState(lightLogo)

  useEffect(() => {
    window.scroll(0,0)
    const handleScroll = () => {
      if (window.scrollY > 630) {
        setScrolling(true);
        setLogo(darkLogo)
      } else {
        setLogo(lightLogo)
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClass = scrolling ? "navbar scrolled" : "navbar";
  
  

  return (
    <nav className={navbarClass}>
      <div className="max-width">
        <div className="logo">
        <img className="jnr" src={Logo} alt="error" width="70px" height="auto" ></img>
          <a href="#">RECursion</a>
        </div>
        <ul className="menu">
        <li><a href="#home" className="menu-btn">Home</a></li>
        <li><a href="#about" className="menu-btn">About</a></li>
        <li><a href="#services" className="menu-btn">Team</a></li>
        <li><a href="#projects" className="menu-btn">Events</a></li>
        <li><a href="#contact" className="menu-btn">Contact</a></li>
        <li><a href="#" className="login"><button>Login</button></a></li>
        </ul>
        <i className="fas fa-bars"></i>
        <div className="menu-btn"></div>
      </div>
    </nav>
  );
}

export default Navbar;
