import {
  ArrowDownRight,
  BriefcaseBusiness,
  Clock3,
} from "lucide-react";

import { experiences } from "../../data/experience";

import "./Experience.css";

function Experience() {
  return (
    <section
      className="experience"
      id="experience"
    >
      <div className="experience__container">

        {/* =================================================
            SECTION HEADER
        ================================================= */}

        <div className="experience__section-header">

          <div className="experience__section-label">

            <span className="experience__section-number">
              04
            </span>

            <span className="experience__section-line"></span>

            <span>
              Experience
            </span>

          </div>

          <span className="experience__section-meta">
            Professional / Technical / Operations
          </span>

        </div>


        {/* =================================================
            INTRO
        ================================================= */}

        <div className="experience__intro">

          <div className="experience__intro-title">

            <span className="experience__micro-label">
              Professional background
            </span>

            <h2>
              Where I've
              <br />
              Worked
              <span>.</span>
            </h2>

          </div>


          <div className="experience__intro-copy">

            <div className="experience__intro-marker">

              <span></span>

              <p>
                Experience beyond projects
              </p>

            </div>

            <p>
              Professional experience across technical
              automation, data quality assurance, AI-assisted
              workflows, and academic operations.
            </p>

            <p className="experience__intro-secondary">
              These roles complement my primary focus on
              full-stack software engineering by strengthening
              my experience with automation, validation,
              technical workflows, and collaborative work.
            </p>

          </div>

        </div>


        {/* =================================================
            EXPERIENCE SUMMARY
        ================================================= */}

        <div className="experience__summary">

          <div className="experience__summary-item">

            <span>
              Current roles
            </span>

            <strong>
              02
            </strong>

          </div>


          <div className="experience__summary-item">

            <span>
              Technical focus
            </span>

            <strong>
              Automation
            </strong>

          </div>


          <div className="experience__summary-item">

            <span>
              Engineering tools
            </span>

            <strong>
              FFmpeg / n8n / Docker
            </strong>

          </div>


          <div className="experience__summary-item">

            <span>
              Primary career direction
            </span>

            <strong>
              Full-Stack Software Engineering
            </strong>

          </div>

        </div>


        {/* =================================================
            TIMELINE
        ================================================= */}

        <div className="experience__timeline">

          <div className="experience__timeline-header">

            <div>

              <span className="experience__micro-label">
                Professional timeline
              </span>

              <h3>
                Experience
                <br />
                Log.
              </h3>

            </div>


            <div className="experience__timeline-icon">

              <BriefcaseBusiness
                size={27}
                strokeWidth={1.4}
              />

            </div>

          </div>


          {/* =================================================
              EXPERIENCE ITEMS
          ================================================= */}

          <div className="experience__list">

            {experiences.map((experience) => (

              <article
                className="experience__item"
                key={experience.number}
              >

                {/* LEFT COLUMN */}

                <div className="experience__item-index">

                  <span className="experience__item-number">
                    {experience.number}
                  </span>

                  <div className="experience__item-period">

                    <Clock3
                      size={16}
                      strokeWidth={1.5}
                    />

                    <span>
                      {experience.period}
                    </span>

                  </div>

                </div>


                {/* MAIN CONTENT */}

                <div className="experience__item-main">

                  <div className="experience__item-top">

                    <div>

                      <span className="experience__item-type">
                        {experience.type}
                      </span>

                      <h4>
                        {experience.role}
                      </h4>

                    </div>


                    <span
                      className={`experience__status ${
                        experience.status === "Current"
                          ? "experience__status--current"
                          : ""
                      }`}
                    >

                      {experience.status === "Current" && (
                        <span></span>
                      )}

                      {experience.status}

                    </span>

                  </div>


                  <div className="experience__organization">

                    <strong>
                      {experience.organization}
                    </strong>

                    <span>
                      {experience.department}
                    </span>

                  </div>


                  <p className="experience__description">
                    {experience.description}
                  </p>


                  <div className="experience__responsibilities">

                    {experience.responsibilities.map(
                      (responsibility, index) => (
                        <div
                          className="experience__responsibility"
                          key={responsibility}
                        >

                          <span>
                            0{index + 1}
                          </span>

                          <p>
                            {responsibility}
                          </p>

                        </div>
                      )
                    )}

                  </div>

                </div>


                {/* SIDE / TAGS */}

                <div className="experience__item-side">

                  <div className="experience__technologies">

                    <span className="experience__side-label">
                      Focus / Tools
                    </span>

                    <div className="experience__technology-list">

                      {experience.technologies.map(
                        (technology) => (
                          <span key={technology}>
                            {technology}
                          </span>
                        )
                      )}

                    </div>

                  </div>


                  <ArrowDownRight
                    className="experience__item-arrow"
                    size={23}
                    strokeWidth={1.5}
                  />

                </div>

              </article>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default Experience;