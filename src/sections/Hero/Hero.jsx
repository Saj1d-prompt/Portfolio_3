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
                            <span>Software</span>
                            <span>Engineer</span>
                        </h1>
                    </div>

                    <div className="hero__typing">
                        <span className="hero__typing-label">
                            I work across
                        </span>

                        <div className="hero__typing-value">
                            <TypingText />
                        </div>
                    </div>

                    <p className="hero__description">
                        I build reliable full-stack applications across
                        frontend, backend, APIs, and relational databases —
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
                            download="Sajid-Ul-Islam-CV.pdf"
                        >
                            <span>
                                Download résumé
                            </span>

                            <span className="hero__button-arrow">
                                ↓
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
                            <span>
                                Portrait
                            </span>

                            <span>
                                01 / 01
                            </span>
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
                                Dhaka / Bangladesh
                            </span>

                            <span>
                                Full-Stack Software Engineer
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* =========================
          BOTTOM
      ========================== */}

            <div className="hero__bottom">
                <div className="hero__bottom-item">
                    <span>
                        Primary stack
                    </span>

                    <strong>
                        React / Laravel / MySQL
                    </strong>
                </div>

                <div className="hero__bottom-item">
                    <span>
                        Focus
                    </span>

                    <strong>
                        Full-Stack Software Development
                    </strong>
                </div>

                <a
                    href="#profile"
                    className="hero__scroll"
                >
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