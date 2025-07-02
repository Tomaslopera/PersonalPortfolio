import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-links">
        <Link to="/">About Me</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/academic">Academic Experience</Link>
      </div>
    </nav>
  );
}

export default Navbar;
