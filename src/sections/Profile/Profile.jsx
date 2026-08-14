import {
  Code2,
  Server,
  Database,
  GitBranch,
  Sparkles,
  ArrowDownRight,
} from "lucide-react";

import "./Profile.css";

const capabilities = [
  {
    number: "01",
    title: "Frontend",
    description: "React / JavaScript / HTML / CSS",
    icon: Code2,
  },
  {
    number: "02",
    title: "Backend",
    description: "Laravel / PHP / REST APIs / Sanctum",
    icon: Server,
  },
  {
    number: "03",
    title: "Database",
    description: "MySQL / SQL / Relational Database Design",
    icon: Database,
  },
  {
    number: "04",
    title: "Engineering",
    description: "RBAC / OOP / Git / API Architecture",
    icon: GitBranch,
  },
  {
    number: "05",
    title: "Additional",
    description: "Automation / AI Workflows / IoT",
    icon: Sparkles,
  },
];

function Profile() {
  return (
    <section
      className="profile"
      id="profile"
    >
      <div className="profile__container">

        <div className="profile__section-header">
          <div className="profile__section-label">
            <span className="profile__section-number">
              02
            </span>

            <span className="profile__section-line"></span>

            <span>
              Profile / Engineering Identity
            </span>
          </div>

          <span className="profile__section-meta">
            Full-Stack / Software Engineering
          </span>
        </div>


        {/* =================================================
            INTRO
        ================================================= */}

        <div className="profile__intro">

          <div className="profile__intro-title">
            <span className="profile__micro-label">
              What I do
            </span>

            <h2>
              Full-Stack
              <br />
              Software
              <br />
              Engineering
              <span className="profile__title-accent">
                .
              </span>
            </h2>
          </div>


          <div className="profile__intro-copy">

            <div className="profile__intro-marker">
              <span></span>

              <p>
                End-to-end development
              </p>
            </div>

            <p className="profile__description">
              I build complete web applications from
              user-facing interfaces to backend services,
              REST APIs, application logic, authentication,
              and relational databases.
            </p>

            <p className="profile__description profile__description--secondary">
              My primary stack centers around React,
              Laravel, and MySQL, with additional experience
              in automation, AI-assisted workflows, and
              IoT-integrated systems.
            </p>

            <a
              href="#work"
              className="profile__work-link"
            >
              <span>
                See how I apply it
              </span>

              <ArrowDownRight
                size={19}
                strokeWidth={1.7}
              />
            </a>

          </div>

        </div>


        {/* =================================================
            ENGINEERING FOCUS
        ================================================= */}

        <div className="profile__focus">

          <div className="profile__focus-header">

            <span className="profile__micro-label">
              Engineering focus
            </span>

            <span className="profile__focus-id">
              SYS / 02
            </span>

          </div>


          <div className="profile__focus-grid">

            <div className="profile__focus-primary">

              <div className="profile__focus-primary-top">

                <span className="profile__focus-index">
                  Primary
                </span>

                <span className="profile__focus-status">
                  <span></span>
                  Core discipline
                </span>

              </div>


              <div className="profile__focus-primary-content">

                <p className="profile__focus-small">
                  Building across
                </p>

                <h3>
                  Frontend
                  <span>+</span>
                  Backend
                  <span>+</span>
                  Database
                </h3>

              </div>


              <div className="profile__focus-stack">

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


            <div className="profile__focus-supporting">

              <span className="profile__focus-index">
                Supporting
              </span>

              <h3>
                Beyond the
                <br />
                core stack.
              </h3>

              <p>
                Automation, intelligent workflows,
                integrations and connected systems broaden
                how I approach software problems.
              </p>

            </div>

          </div>

        </div>


        {/* =================================================
            CAPABILITIES
        ================================================= */}

        <div className="profile__capabilities">

          <div className="profile__capabilities-heading">

            <span className="profile__micro-label">
              Capability map
            </span>

            <p>
              Technologies are grouped by how I use them,
              not by arbitrary skill percentages.
            </p>

          </div>


          <div className="profile__capability-list">

            {capabilities.map((capability) => {
              const Icon = capability.icon;

              return (
                <div
                  className="profile__capability"
                  key={capability.number}
                >
                  <div className="profile__capability-number">
                    {capability.number}
                  </div>

                  <div className="profile__capability-icon">
                    <Icon
                      size={21}
                      strokeWidth={1.5}
                    />
                  </div>

                  <div className="profile__capability-title">
                    {capability.title}
                  </div>

                  <div className="profile__capability-description">
                    {capability.description}
                  </div>

                  <ArrowDownRight
                    className="profile__capability-arrow"
                    size={19}
                    strokeWidth={1.5}
                  />
                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}

export default Profile;