import React, { useState } from "react";
import { FaTimes, FaBars,FaSearch } from "react-icons/fa";
import '../Style/PortNav.css'
import { Link } from "react-router-dom";


const NavBar = () => {
  const [icon, seticon] = useState(false);
  
  return (
    <div className="cloths-navbar justify-between ">
      <div>
      <h2 className="Zahid"> <span className="Hazrat">Hazrat</span> Zahid</h2>
       
      </div>
   
      <ul
        className={icon ? "menu active" : "menu"}
        onclick={() => seticon(!icon)}
      >
       
        <li><Link to="/Home" onClick={() => seticon(!icon)}>Home</Link></li>
        <li><Link to="/About" onClick={() => seticon(!icon)}>About</Link></li>
        <li><Link to="/Portfolio" onClick={() => seticon(!icon)}>  Portfolio</Link></li>
        <li><Link to="/MainServices" onClick={() => seticon(!icon)}>Services</Link></li>
      
        <li><Link to="/Skill" onClick={() => seticon(!icon)}> Skill </Link></li>
        <li><Link to="/Process" onClick={() => seticon(!icon)}>Process</Link></li>
        
      </ul>
     
  

      <div className="menu__icon">
        <span className="navbar__icon" onClick={() => seticon(!icon)}>
          {!icon ? <FaBars /> : <FaTimes />}
        </span>
      </div>
     
    </div>
  );
};

export default NavBar;
