import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="navbar">
      <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        {!isMenuOpen ? (
          <>
            <span></span>
            <span></span>
            <span></span>
          </>
        ) : (
          <div className="close-btn">&times;</div> 
        )}
      </div>
      <ul className={`navlist ${isMenuOpen ? 'show' : ''}`}>
        <p>SHOP</p>
        <p>SKILL</p>
        <p>STORIES</p>
        <p>ABOUT</p>
        <p>CONTACT</p>
      </ul>
    </div>
  );
}

export default Navbar;
