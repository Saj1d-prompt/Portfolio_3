import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar__inner">

        <a
          href="#home"
          className="navbar__brand"
          onClick={closeMenu}
          aria-label="Go to homepage"
        >
          <span className="navbar__brand-main">S</span>
          <span className="navbar__brand-slash">/</span>
          <span className="navbar__brand-number">01</span>
        </a>

        <nav
          className={`navbar__nav ${
            menuOpen ? "navbar__nav--open" : ""
          }`}
        >
          <a href="#work" onClick={closeMenu}>
            Work
          </a>

          <a href="#profile" onClick={closeMenu}>
            Profile
          </a>

          <a href="#experience" onClick={closeMenu}>
            Experience
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>

          <a
            href="/Sajid-Ul-Islam-CV.pdf"
            className="navbar__resume"
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            Résumé
            <span>↗</span>
          </a>
        </nav>

        <button
          className={`navbar__menu-button ${
            menuOpen ? "navbar__menu-button--active" : ""
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
        </button>

      </div>
    </header>
  );
}

export default Navbar;