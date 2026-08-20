import { useEffect, useState } from "react";

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

  const [activeSection, setActiveSection] =
    useState("home");

  const [scrollProgress, setScrollProgress] =
    useState(0);

  const [scrolled, setScrolled] =
    useState(false);


  /* =========================================================
     CLOSE MOBILE MENU
  ========================================================= */

  const closeMenu = () => {
    setMenuOpen(false);
  };


  /* =========================================================
     SECTION + SCROLL TRACKING
  ========================================================= */

  useEffect(() => {
    const sectionIds = [
      "home",
      "profile",
      "work",
      "experience",
      "contact",
    ];

    let ticking = false;


    const updateNavbar = () => {
      const scrollY = window.scrollY;

      const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;


      /* ===============================================
         SCROLL PROGRESS
      ================================================ */

      if (documentHeight > 0) {
        const progress =
          (scrollY / documentHeight) * 100;

        setScrollProgress(
          Math.min(
            Math.max(progress, 0),
            100
          )
        );
      }


      /* ===============================================
         NAVBAR SCROLLED STATE
      ================================================ */

      setScrolled(scrollY > 30);


      /* ===============================================
         ACTIVE SECTION
      ================================================ */

      const markerPosition =
        scrollY + 180;

      let currentSection = "home";


      sectionIds.forEach((sectionId) => {
        const section =
          document.getElementById(sectionId);

        if (!section) {
          return;
        }

        const sectionTop =
          section.offsetTop;

        const sectionBottom =
          sectionTop +
          section.offsetHeight;


        if (
          markerPosition >= sectionTop &&
          markerPosition < sectionBottom
        ) {
          currentSection =
            sectionId;
        }
      });


      /* ===============================================
         FORCE CONTACT ACTIVE NEAR PAGE END
      ================================================ */

      const nearBottom =
        window.innerHeight +
          window.scrollY >=
        document.documentElement.scrollHeight -
          80;

      if (nearBottom) {
        currentSection =
          "contact";
      }


      setActiveSection(
        currentSection
      );

      ticking = false;
    };


    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(
          updateNavbar
        );

        ticking = true;
      }
    };


    updateNavbar();

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );


    window.addEventListener(
      "resize",
      handleScroll
    );


    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );

      window.removeEventListener(
        "resize",
        handleScroll
      );
    };
  }, []);


  /* =========================================================
     LOCK BODY WHEN MOBILE MENU IS OPEN
  ========================================================= */

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow =
        "hidden";
    } else {
      document.body.style.overflow =
        "";
    }

    return () => {
      document.body.style.overflow =
        "";
    };
  }, [menuOpen]);


  return (
    <header
      className={`navbar ${
        scrolled
          ? "navbar--scrolled"
          : ""
      }`}
    >

      {/* =================================================
          SCROLL PROGRESS
      ================================================= */}

      <div
        className="navbar__progress"
        aria-hidden="true"
      >
        <span
          style={{
            width: `${scrollProgress}%`,
          }}
        ></span>
      </div>


      <div className="navbar__inner">

        {/* =================================================
            BRAND
        ================================================= */}

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


        {/* =================================================
            NAVIGATION
        ================================================= */}

        <nav
          className={`navbar__nav ${
            menuOpen
              ? "navbar__nav--open"
              : ""
          }`}
        >

          {/* PROFILE */}

          <a
            href="#profile"
            onClick={closeMenu}
            className={
              activeSection === "profile"
                ? "navbar__link--active"
                : ""
            }
          >
            <UserRound
              size={17}
              strokeWidth={1.7}
            />

            <span>
              Profile
            </span>
          </a>


          {/* WORK */}

          <a
            href="#work"
            onClick={closeMenu}
            className={
              activeSection === "work"
                ? "navbar__link--active"
                : ""
            }
          >
            <BriefcaseBusiness
              size={17}
              strokeWidth={1.7}
            />

            <span>
              Work
            </span>
          </a>


          {/* EXPERIENCE */}

          <a
            href="#experience"
            onClick={closeMenu}
            className={
              activeSection === "experience"
                ? "navbar__link--active"
                : ""
            }
          >
            <Clock3
              size={17}
              strokeWidth={1.7}
            />

            <span>
              Experience
            </span>
          </a>


          {/* CONTACT */}

          <a
            href="#contact"
            onClick={closeMenu}
            className={
              activeSection === "contact"
                ? "navbar__link--active"
                : ""
            }
          >
            <Mail
              size={17}
              strokeWidth={1.7}
            />

            <span>
              Contact
            </span>
          </a>


          {/* RESUME */}

          <a
            href="/Sajid-Ul-Islam-CV.pdf"
            className="navbar__resume"
            download="Sajid-Ul-Islam-CV.pdf"
            onClick={closeMenu}
          >
            <FileText
              size={17}
              strokeWidth={1.7}
            />

            <span>
              Résumé
            </span>

            <ArrowUpRight
              size={15}
              strokeWidth={1.8}
              className="navbar__resume-arrow"
            />
          </a>

        </nav>


        {/* =================================================
            CONTROLS
        ================================================= */}

        <div className="navbar__controls">

          <ThemeToggle />


          <button
            type="button"
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