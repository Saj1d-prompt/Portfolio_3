import {
  ArrowUp,
  ArrowUpRight,
  Download,
  GitFork,
  Mail,
} from "lucide-react";

import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">

      <div className="footer__container">

        {/* =================================================
            TOP
        ================================================= */}

        <div className="footer__top">

          <div className="footer__identity">

            <span className="footer__eyebrow">
              Portfolio / End
            </span>

            <h2>
              Sajid Ul Islam
              <span>.</span>
            </h2>

            <p>
              Full-Stack Software Engineer
            </p>

          </div>


          <a
            href="#home"
            className="footer__top-button"
            aria-label="Back to top"
          >
            <span>
              Back to top
            </span>

            <ArrowUp
              size={19}
              strokeWidth={1.6}
            />
          </a>

        </div>


        {/* =================================================
            MAIN FOOTER
        ================================================= */}

        <div className="footer__main">

          {/* ===============================================
              STATEMENT
          ================================================ */}

          <div className="footer__statement">

            <span className="footer__small-label">
              Engineering focus
            </span>

            <p>
              Building reliable software across
              frontend, backend, APIs, and relational
              databases.
            </p>


            <div className="footer__stack">

              <span>
                React
              </span>

              <span>
                Laravel
              </span>

              <span>
                MySQL
              </span>

            </div>

          </div>


          {/* ===============================================
              NAVIGATION
          ================================================ */}

          <div className="footer__navigation">

            <div className="footer__nav-group">

              <span className="footer__small-label">
                Navigation
              </span>

              <a href="#home">
                Home
              </a>

              <a href="#profile">
                Profile
              </a>

              <a href="#work">
                Work
              </a>

              <a href="#experience">
                Experience
              </a>

              <a href="#contact">
                Contact
              </a>

            </div>


            {/* =============================================
                CONNECT
            ============================================== */}

            <div className="footer__nav-group">

              <span className="footer__small-label">
                Connect
              </span>


              <a
                href="https://github.com/Saj1d-prompt"
                target="_blank"
                rel="noreferrer"
              >
                <GitFork
                  size={15}
                  strokeWidth={1.5}
                />

                <span>
                  GitHub
                </span>

                <ArrowUpRight
                  size={14}
                  strokeWidth={1.5}
                />
              </a>


              <a
                href="https://www.linkedin.com/in/sajid-ul-islam-682760389/"
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  LinkedIn
                </span>

                <ArrowUpRight
                  size={14}
                  strokeWidth={1.5}
                />
              </a>


              <a
                href="mailto:sajidulislam2225@gmail.com"
              >
                <Mail
                  size={15}
                  strokeWidth={1.5}
                />

                <span>
                  Email
                </span>

                <ArrowUpRight
                  size={14}
                  strokeWidth={1.5}
                />
              </a>


              <a
                href="/Sajid-Ul-Islam-CV.pdf"
                download="Sajid-Ul-Islam-CV.pdf"
              >
                <Download
                  size={15}
                  strokeWidth={1.5}
                />

                <span>
                  Résumé
                </span>
              </a>

            </div>

          </div>

        </div>


        {/* =================================================
            LARGE SIGNATURE
        ================================================= */}

        <div className="footer__signature">

          <span>
            FULL-STACK
          </span>

          <span>
            SOFTWARE
          </span>

          <span>
            ENGINEER
          </span>

        </div>


        {/* =================================================
            BOTTOM BAR
        ================================================= */}

        <div className="footer__bottom">

          <span>
            © {currentYear} Sajid Ul Islam
          </span>


          <span>
            React / JavaScript
          </span>


          <span>
            Bangladesh
          </span>


          <span>
            Designed & engineered by Sajid
          </span>

        </div>

      </div>

    </footer>
  );
}

export default Footer;