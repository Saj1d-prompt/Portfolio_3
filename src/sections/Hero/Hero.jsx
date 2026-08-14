import TypingText from "../../components/TypingText/TypingText";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero__grid-background"></div>

      <div className="hero__container">

        {/* =========================
            LEFT SIDE
        ========================== */}

        <div className="hero__content">

          <div className="hero__eyebrow">
            <span className="hero__eyebrow-index">
              01
            </span>

            <span className="hero__eyebrow-line"></span>

            <span>
              Portfolio / 2026
            </span>
          </div>


          <div className="hero__heading-wrapper">

            <p className="hero__name">
              Sajid Ul Islam
            </p>

            <h1 className="hero__heading">
              <span>Full-Stack</span>

              <span>
                Software
                <span className="hero__accent-dot">.</span>
              </span>

              <span>Engineer</span>
            </h1>

          </div>


          <div className="hero__typing">

            <span className="hero__typing-label">
              I WORK ACROSS
            </span>

            <div className="hero__typing-value">
              <TypingText />
            </div>

          </div>


          <p className="hero__description">
            I build reliable full-stack applications across
            frontend, backend, APIs, and relational data —
            primarily using React, Laravel, and MySQL.
          </p>


          <div className="hero__actions">

            <a
              href="#work"
              className="hero__button hero__button--primary"
            >
              <span>
                Explore work
              </span>

              <span className="hero__button-arrow">
                ↘
              </span>
            </a>


            <a
              href="/Sajid-Ul-Islam-CV.pdf"
              className="hero__button hero__button--secondary"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                Download résumé
              </span>

              <span>
                ↗
              </span>
            </a>

          </div>

        </div>


        {/* =========================
            RIGHT SIDE
        ========================== */}

        <div className="hero__visual">

          <div className="hero__visual-frame">

            <div className="hero__visual-index">
              <span>PORTRAIT</span>
              <span>01 / 01</span>
            </div>

            <div className="hero__portrait">

              <div className="hero__portrait-grid"></div>

              <div className="hero__portrait-status">
                <span className="hero__status-dot"></span>

                <span>
                  Available for opportunities
                </span>
              </div>

            </div>


            <div className="hero__visual-footer">

              <span>
                DHAKA / BANGLADESH
              </span>

              <span>
                23.8° N / 90.4° E
              </span>

            </div>

          </div>

        </div>

      </div>


      {/* =========================
          BOTTOM BAR
      ========================== */}

      <div className="hero__bottom">

        <div className="hero__bottom-item">
          <span>PRIMARY STACK</span>

          <strong>
            React / Laravel / MySQL
          </strong>
        </div>


        <div className="hero__bottom-item">
          <span>FOCUS</span>

          <strong>
            Full-Stack Systems
          </strong>
        </div>


        <a href="#profile" className="hero__scroll">
          <span>
            Scroll to explore
          </span>

          <span className="hero__scroll-arrow">
            ↓
          </span>
        </a>

      </div>

    </section>
  );
}

export default Hero;