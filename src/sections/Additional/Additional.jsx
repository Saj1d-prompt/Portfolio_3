import {
  Workflow,
  Cpu,
  Radio,
  ArrowDownRight,
} from "lucide-react";

import "./Additional.css";

const additionalAreas = [
  {
    number: "01",
    title: "Automation",
    subtitle: "Technical Workflows",
    description:
      "Experience building automated media-processing and workflow systems using FFmpeg, n8n, and Docker.",
    technologies: [
      "FFmpeg",
      "n8n",
      "Docker",
    ],
    icon: Workflow,
  },

  {
    number: "02",
    title: "AI Workflows",
    subtitle: "Supporting Capability",
    description:
      "Additional experience working with AI-assisted workflows, chatbot testing, structured evaluation, and intelligent software experimentation.",
    technologies: [
      "Python",
      "Gemini API",
      "Chatbot QA",
    ],
    icon: Cpu,
  },

  {
    number: "03",
    title: "IoT Integration",
    subtitle: "Connected Systems",
    description:
      "Worked with software-to-hardware integration through an IoT-enabled Birth Record Communication System.",
    technologies: [
      "C++",
      "Web",
      "Hardware",
    ],
    icon: Radio,
  },
];

function Additional() {
  return (
    <section
      className="additional"
      id="additional-engineering"
    >
      <div className="additional__container">

        {/* ================================================
            SECTION HEADER
        ================================================= */}

        <div className="additional__section-header">
          <div className="additional__section-label">
            <span className="additional__section-number">
              05
            </span>

            <span className="additional__section-line"></span>

            <span>
              Additional Engineering
            </span>
          </div>

          <span className="additional__section-meta">
            Supporting / Beyond Full-Stack
          </span>
        </div>


        {/* ================================================
            INTRO
        ================================================= */}

        <div className="additional__intro">

          <div className="additional__intro-title">
            <span className="additional__micro-label">
              Beyond my primary stack
            </span>

            <h2>
              Engineering
              <br />
              Beyond
              <br />
              The Web
              <span>.</span>
            </h2>
          </div>


          <div className="additional__intro-copy">

            <div className="additional__intro-marker">
              <span></span>

              <p>
                Supporting capabilities
              </p>
            </div>

            <p className="additional__description">
              Full-stack software engineering remains my
              primary focus, while automation, AI-assisted
              workflows, and connected systems extend the
              range of problems I can work with.
            </p>

            <p className="additional__description additional__description--secondary">
              I treat these areas as complementary engineering
              capabilities rather than separate professional
              identities.
            </p>

          </div>

        </div>


        {/* ================================================
            PRIMARY VS SUPPORTING
        ================================================= */}

        <div className="additional__priority">

          <div className="additional__priority-main">

            <span className="additional__priority-label">
              Primary
            </span>

            <strong>
              Full-Stack
              <br />
              Software
              <br />
              Engineering
            </strong>

            <div className="additional__priority-stack">
              <span>React</span>
              <span>Laravel</span>
              <span>MySQL</span>
            </div>

          </div>


          <div className="additional__priority-supporting">

            <span className="additional__priority-label">
              Supporting
            </span>

            <div className="additional__priority-list">
              <span>
                01 / Automation
              </span>

              <span>
                02 / AI Workflows
              </span>

              <span>
                03 / IoT Integration
              </span>
            </div>

          </div>

        </div>


        {/* ================================================
            ADDITIONAL AREAS
        ================================================= */}

        <div className="additional__areas">

          <div className="additional__areas-header">
            <span className="additional__micro-label">
              Additional capability map
            </span>

            <p>
              Supporting areas that broaden my software
              engineering toolkit.
            </p>
          </div>


          <div className="additional__area-grid">

            {additionalAreas.map((area) => {
              const Icon = area.icon;

              return (
                <article
                  className="additional__area"
                  key={area.number}
                >

                  <div className="additional__area-top">

                    <span className="additional__area-number">
                      {area.number}
                    </span>

                    <div className="additional__area-icon">
                      <Icon
                        size={24}
                        strokeWidth={1.4}
                      />
                    </div>

                  </div>


                  <div className="additional__area-content">

                    <span className="additional__area-subtitle">
                      {area.subtitle}
                    </span>

                    <h3>
                      {area.title}
                    </h3>

                    <p>
                      {area.description}
                    </p>

                  </div>


                  <div className="additional__area-footer">

                    <div className="additional__technology-list">
                      {area.technologies.map((technology) => (
                        <span key={technology}>
                          {technology}
                        </span>
                      ))}
                    </div>

                    <ArrowDownRight
                      className="additional__area-arrow"
                      size={21}
                      strokeWidth={1.5}
                    />

                  </div>

                </article>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}

export default Additional;