import { useState } from "react";

import {
  BriefcaseBusiness,
  UserRound,
  Clock3,
  Mail,
  FileText,
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";

import ThemeToggle from "../ThemeToggle/ThemeToggle";

import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar__inner">

        {/* =========================
            BRAND
        ========================== */}

        <a
          href="#home"
          className="navbar__brand"
          onClick={closeMenu}
          aria-label="Go to homepage"
        >
          <span className="navbar__brand-main">
            S
          </span>

          <span className="navbar__brand-slash">
            /
          </span>

          <span className="navbar__brand-number">
            01
          </span>
        </a>


        {/* =========================
            DESKTOP / MOBILE NAV
        ========================== */}

        <nav
          className={`navbar__nav ${
            menuOpen
              ? "navbar__nav--open"
              : ""
          }`}
        >
          <a
            href="#work"
            onClick={closeMenu}
          >
            <BriefcaseBusiness
              size={15}
              strokeWidth={1.7}
            />

            <span>
              Work
            </span>
          </a>


          <a
            href="#profile"
            onClick={closeMenu}
          >
            <UserRound
              size={15}
              strokeWidth={1.7}
            />

            <span>
              Profile
            </span>
          </a>


          <a
            href="#experience"
            onClick={closeMenu}
          >
            <Clock3
              size={15}
              strokeWidth={1.7}
            />

            <span>
              Experience
            </span>
          </a>


          <a
            href="#contact"
            onClick={closeMenu}
          >
            <Mail
              size={15}
              strokeWidth={1.7}
            />

            <span>
              Contact
            </span>
          </a>


          <a
            href="/Sajid-Ul-Islam-CV.pdf"
            className="navbar__resume"
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            <FileText
              size={15}
              strokeWidth={1.7}
            />

            <span>
              Résumé
            </span>

            <ArrowUpRight
              size={14}
              strokeWidth={1.8}
              className="navbar__resume-arrow"
            />
          </a>
        </nav>


        {/* =========================
            RIGHT CONTROLS
        ========================== */}

        <div className="navbar__controls">

          <ThemeToggle />


          <button
            className="navbar__menu-button"
            onClick={() =>
              setMenuOpen(
                (current) => !current
              )
            }
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X
                size={22}
                strokeWidth={1.6}
              />
            ) : (
              <Menu
                size={22}
                strokeWidth={1.6}
              />
            )}
          </button>

        </div>

      </div>
    </header>
  );
}

export default Navbar;