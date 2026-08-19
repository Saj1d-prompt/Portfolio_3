import {
  GraduationCap,
  BookOpen,
  Users,
  ArrowDownRight,
} from "lucide-react";

import {
  education,
  certifications,
  activities,
} from "../../data/background";

import "./Background.css";

function Background() {
  const primaryEducation = education.find(
    (item) => item.primary
  );

  const previousEducation = education.filter(
    (item) => !item.primary
  );

  return (
    <section
      className="background"
      id="background"
    >
      <div className="background__container">

        {/* =================================================
            SECTION HEADER
        ================================================= */}

        <div className="background__section-header">

          <div className="background__section-label">

            <span className="background__section-number">
              07
            </span>

            <span className="background__section-line"></span>

            <span>
              Education / Leadership
            </span>

          </div>

          <span className="background__section-meta">
            Academic / Professional Foundation
          </span>

        </div>


        {/* =================================================
            INTRO
        ================================================= */}

        <div className="background__intro">

          <div className="background__intro-title">

            <span className="background__micro-label">
              Academic background
            </span>

            <h2>
              Academic
              <br />
              Foundation
              <span>.</span>
            </h2>

          </div>


          <div className="background__intro-copy">

            <div className="background__intro-marker">

              <span></span>

              <p>
                Computer Science & Engineering
              </p>

            </div>

            <p className="background__description">
              My academic foundation in Computer Science and
              Engineering supports the systems, application
              architecture, databases, networking, and
              software-development work reflected throughout
              this portfolio.
            </p>

          </div>

        </div>


        {/* =================================================
            FEATURED EDUCATION
        ================================================= */}

        <div className="background__featured">

          <div className="background__featured-top">

            <div>

              <span className="background__featured-label">
                Primary education
              </span>

              <span className="background__featured-number">
                EDU / {primaryEducation.number}
              </span>

            </div>

            <div className="background__featured-icon">

              <GraduationCap
                size={30}
                strokeWidth={1.4}
              />

            </div>

          </div>


          <div className="background__featured-main">

            <div className="background__featured-degree">

              <span>
                {primaryEducation.degree}
              </span>

              <h3>
                Computer Science
                <br />
                & Engineering
              </h3>

            </div>


            <div className="background__featured-info">

              <div className="background__featured-info-item">

                <span>
                  Institution
                </span>

                <strong>
                  {primaryEducation.institution}
                </strong>

              </div>


              <div className="background__featured-info-item">

                <span>
                  Period
                </span>

                <strong>
                  {primaryEducation.period}
                </strong>

              </div>


              <div className="background__featured-info-item background__featured-result">

                <span>
                  {primaryEducation.resultLabel}
                </span>

                <strong>
                  {primaryEducation.result}
                </strong>

              </div>

            </div>

          </div>

        </div>


        {/* =================================================
            LOWER GRID
        ================================================= */}

        <div className="background__lower-grid">

          {/* ===============================================
              PREVIOUS EDUCATION
          ================================================ */}

          <div className="background__panel">

            <div className="background__panel-header">

              <div>

                <span className="background__micro-label">
                  Education
                </span>

                <h3>
                  Earlier
                  <br />
                  Education.
                </h3>

              </div>

              <GraduationCap
                size={25}
                strokeWidth={1.4}
              />

            </div>


            <div className="background__education-list">

              {previousEducation.map((item) => (

                <article
                  className="background__education-item"
                  key={item.number}
                >

                  <div className="background__education-top">

                    <span>
                      {item.number}
                    </span>

                    <span>
                      {item.period}
                    </span>

                  </div>


                  <h4>
                    {item.field}
                  </h4>

                  <p>
                    {item.institution}
                  </p>


                  <div className="background__education-result">

                    <span>
                      {item.resultLabel}
                    </span>

                    <strong>
                      {item.result}
                    </strong>

                  </div>

                </article>

              ))}

            </div>

          </div>


          {/* ===============================================
              CERTIFICATIONS
          ================================================ */}

          <div className="background__panel">

            <div className="background__panel-header">

              <div>

                <span className="background__micro-label">
                  Certifications
                </span>

                <h3>
                  Continued
                  <br />
                  Learning.
                </h3>

              </div>

              <BookOpen
                size={25}
                strokeWidth={1.4}
              />

            </div>


            <div className="background__certification-list">

              {certifications.map((certification) => (

                <article
                  className="background__certification"
                  key={certification.number}
                >

                  <span className="background__certification-number">
                    {certification.number}
                  </span>


                  <div>

                    <span className="background__certification-issuer">
                      {certification.issuer}
                    </span>

                    <h4>
                      {certification.title}
                    </h4>

                  </div>


                  <ArrowDownRight
                    size={19}
                    strokeWidth={1.5}
                  />

                </article>

              ))}

            </div>

          </div>

        </div>


        {/* =================================================
            LEADERSHIP
        ================================================= */}

        <div className="background__leadership">

          <div className="background__leadership-header">

            <div>

              <span className="background__micro-label">
                Leadership & community
              </span>

              <h3>
                Beyond
                <br />
                Coursework.
              </h3>

            </div>


            <div className="background__leadership-icon">

              <Users
                size={28}
                strokeWidth={1.4}
              />

            </div>

          </div>


          <div className="background__activity-list">

            {activities.map((activity) => (

              <article
                className="background__activity"
                key={activity.number}
              >

                <span className="background__activity-number">
                  {activity.number}
                </span>


                <div className="background__activity-main">

                  <span className="background__activity-type">
                    {activity.type}
                  </span>

                  <h4>
                    {activity.role}
                  </h4>

                </div>


                <div className="background__activity-org">

                  <strong>
                    {activity.organization}
                  </strong>

                  <span>
                    {activity.detail}
                  </span>

                </div>


                <span className="background__activity-period">
                  {activity.period}
                </span>


                <ArrowDownRight
                  className="background__activity-arrow"
                  size={19}
                  strokeWidth={1.5}
                />

              </article>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default Background;