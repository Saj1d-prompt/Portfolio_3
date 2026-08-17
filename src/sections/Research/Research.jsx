import {
  BookOpen,
  MapPin,
  CalendarDays,
  GraduationCap,
} from "lucide-react";

import "./Research.css";

function Research() {
  return (
    <section
      className="research"
      id="research"
    >
      <div className="research__container">

        {/* ================================================
            HEADER
        ================================================= */}

        <div className="research__section-header">

          <div className="research__section-label">

            <span className="research__section-number">
              06
            </span>

            <span className="research__section-line"></span>

            <span>
              Research
            </span>

          </div>

          <span className="research__section-meta">
            Computer Vision / Academic Research
          </span>

        </div>


        {/* ================================================
            RESEARCH FEATURE
        ================================================= */}

        <div className="research__feature">

          <div className="research__feature-left">

            <span className="research__micro-label">
              Publication / 2026
            </span>

            <div className="research__icon">
              <BookOpen
                size={33}
                strokeWidth={1.3}
              />
            </div>

            <span className="research__index">
              R / 01
            </span>

          </div>


          <div className="research__feature-main">

            <span className="research__feature-kicker">
              CNN / Transfer Learning
            </span>

            <h2>
              CNN-Based
              <br />
              Automated Detection
              <br />
              of Mango Leaf
              <br />
              Diseases
              <span>.</span>
            </h2>

            <p className="research__subtitle">
              Using Transfer Learning
            </p>

          </div>

        </div>


        {/* ================================================
            DETAILS
        ================================================= */}

        <div className="research__details">

          <div className="research__details-intro">

            <span className="research__micro-label">
              Research context
            </span>

            <p>
              Research exploring automated plant-disease
              detection using convolutional neural networks
              and transfer-learning techniques.
            </p>

          </div>


          <div className="research__metadata">

            <div className="research__metadata-item">

              <CalendarDays
                size={20}
                strokeWidth={1.5}
              />

              <span>
                Presented
              </span>

              <strong>
                April 2026
              </strong>

            </div>


            <div className="research__metadata-item">

              <MapPin
                size={20}
                strokeWidth={1.5}
              />

              <span>
                Conference
              </span>

              <strong>
                ICTIS / Bangkok
              </strong>

            </div>


            <div className="research__metadata-item">

              <GraduationCap
                size={20}
                strokeWidth={1.5}
              />

              <span>
                Proceedings
              </span>

              <strong>
                Springer LNNS
              </strong>

            </div>

          </div>

        </div>


        {/* ================================================
            BOTTOM STATEMENT
        ================================================= */}

        <div className="research__statement">

          <span>
            Research complements engineering.
          </span>

          <p>
            It strengthens how I approach experimentation,
            technical evaluation, and evidence-driven
            problem solving without replacing my primary
            focus on software engineering.
          </p>

        </div>

      </div>
    </section>
  );
}

export default Research;