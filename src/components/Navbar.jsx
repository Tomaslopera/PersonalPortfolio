import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(v => !v);
  const closeMenu = () => setMenuOpen(false);

  // Bloquear scroll cuando el drawer está abierto (mejor UX en móvil)
  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Botón burger a la izquierda */}
        <button
          aria-label="Toggle navigation"
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span><span></span><span></span>
        </button>

        {/* Enlaces desktop */}
        <div className="navbar-links desktop">
          <Link to="/" className="nav-item">About Me</Link>
          <Link to="/skills" className="nav-item">Skills</Link>
          <Link to="/projects" className="nav-item">Projects</Link>
          <Link to="/education" className="nav-item">Education</Link>
        </div>
      </div>

      {/* Drawer izquierdo móvil/tablet */}
      <aside className={`drawer ${menuOpen ? "open" : ""}`}>
        <div className="drawer-inner">
          <Link to="/" onClick={closeMenu} className="nav-item">About Me</Link>
          <Link to="/skills" onClick={closeMenu} className="nav-item">Skills</Link>
          <Link to="/projects" onClick={closeMenu} className="nav-item">Projects</Link>
          <Link to="/education" onClick={closeMenu} className="nav-item">Education</Link>
        </div>
      </aside>

      {/* Sombra clicable para cerrar */}
      {menuOpen && <div className="backdrop" onClick={closeMenu} />}
    </nav>
  );
}

export default Navbar;