import {
    ArrowDownRight,
    ArrowUpRight,
    GitFork,
    Globe2,
    Layers3,
} from "lucide-react";

import { projects } from "../../data/projects";

import "./Work.css";

function Work() {
    const featuredProject = projects.find(
        (project) => project.featured
    );

    return (
        <section
            className="work"
            id="work"
        >
            <div className="work__container">

                {/* =================================================
            SECTION HEADER
        ================================================= */}

                <div className="work__section-header">

                    <div className="work__section-label">

                        <span className="work__section-number">
                            03
                        </span>

                        <span className="work__section-line"></span>

                        <span>
                            Selected Work
                        </span>

                    </div>

                    <span className="work__section-meta">
                        Full-Stack / Production / Systems
                    </span>

                </div>


                {/* =================================================
            INTRO
        ================================================= */}

                <div className="work__intro">

                    <div>

                        <span className="work__micro-label">
                            Selected engineering work
                        </span>

                        <h2 className="work__title">
                            Systems I've
                            <br />
                            Built
                            <span>.</span>
                        </h2>

                    </div>


                    <div className="work__intro-copy">

                        <span className="work__intro-index">
                            04 Projects / Selected
                        </span>

                        <p>
                            Full-stack applications built across frontend,
                            backend, REST APIs, relational databases,
                            authentication, business workflows, and
                            connected systems.
                        </p>

                    </div>

                </div>


                {/* =================================================
            PROJECT INDEX
        ================================================= */}

                <div className="work__index">

                    <div className="work__index-header">

                        <span>
                            Index
                        </span>

                        <span>
                            Project
                        </span>

                        <span>
                            Discipline
                        </span>

                        <span>
                            Year
                        </span>

                    </div>


                    {projects.map((project) => (
                        <a
                            key={project.number}
                            href={`#project-${project.number}`}
                            className="work__index-row"
                        >

                            <span className="work__index-number">
                                {project.number}
                            </span>

                            <span className="work__index-project">
                                {project.name}
                            </span>

                            <span className="work__index-category">
                                {project.category}
                            </span>

                            <span className="work__index-year">
                                {project.year}
                            </span>

                            <ArrowDownRight
                                className="work__index-arrow"
                                size={21}
                                strokeWidth={1.5}
                            />

                        </a>
                    ))}

                </div>


                {/* =================================================
            FLAGSHIP PROJECT
        ================================================= */}

                <article
                    className="work__featured"
                    id={`project-${featuredProject.number}`}
                >

                    <div className="work__featured-top">

                        <div className="work__featured-label">

                            <span>
                                {featuredProject.number}
                            </span>

                            <span className="work__featured-label-line"></span>

                            <span>
                                Flagship Project
                            </span>

                        </div>


                        <div className="work__featured-status">

                            <span className="work__status-dot"></span>

                            <span>
                                {featuredProject.status}
                            </span>

                        </div>

                    </div>


                    {/* =================================================
              PROJECT TITLE
          ================================================= */}

                    <div className="work__featured-heading">

                        <div>

                            <span className="work__micro-label">
                                {featuredProject.type}
                            </span>

                            <h3>
                                Alishan
                                <br />
                                Accommodation
                                <br />
                                Management
                                <br />
                                System
                                <span>.</span>
                            </h3>

                        </div>


                        <div className="work__featured-summary">

                            <p>
                                {featuredProject.description}
                            </p>


                            <div className="work__featured-links">

                                {featuredProject.liveUrl && (
                                    <a
                                        href={featuredProject.liveUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <Globe2
                                            size={18}
                                            strokeWidth={1.6}
                                        />

                                        <span>
                                            Visit live system
                                        </span>

                                        <ArrowUpRight
                                            size={17}
                                            strokeWidth={1.6}
                                        />
                                    </a>
                                )}

                                {featuredProject.githubUrl && (
                                    <a
                                        href={featuredProject.githubUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <GitFork
                                            size={18}
                                            strokeWidth={1.6}
                                        />

                                        <span>
                                            GitHub
                                        </span>

                                        <ArrowUpRight
                                            size={17}
                                            strokeWidth={1.6}
                                        />
                                    </a>
                                )}

                            </div>

                        </div>

                    </div>


                    {/* =================================================
              PROJECT META
          ================================================= */}

                    <div className="work__project-meta">

                        <div className="work__project-meta-item">

                            <span>
                                Type
                            </span>

                            <strong>
                                Commercial Client Project
                            </strong>

                        </div>


                        <div className="work__project-meta-item">

                            <span>
                                Role
                            </span>

                            <strong>
                                Full-Stack Developer
                            </strong>

                        </div>


                        <div className="work__project-meta-item">

                            <span>
                                Architecture
                            </span>

                            <strong>
                                API-Driven
                            </strong>

                        </div>


                        <div className="work__project-meta-item">

                            <span>
                                Status
                            </span>

                            <strong>
                                Production
                            </strong>

                        </div>

                    </div>


                    {/* =================================================
              WORKFLOW
          ================================================= */}

                    <div className="work__architecture">

                        <div className="work__architecture-heading">

                            <div>

                                <span className="work__micro-label">
                                    Core workflow
                                </span>

                                <h4>
                                    From request
                                    <br />
                                    to confirmation.
                                </h4>

                            </div>


                            <Layers3
                                size={30}
                                strokeWidth={1.2}
                            />

                        </div>


                        <div className="work__workflow">

                            <div className="work__workflow-node">

                                <span>
                                    01
                                </span>

                                <strong>
                                    Booking
                                    <br />
                                    Request
                                </strong>

                            </div>


                            <div className="work__workflow-connector">
                                <span></span>
                                <ArrowDownRight
                                    size={20}
                                    strokeWidth={1.4}
                                />
                            </div>


                            <div className="work__workflow-node">

                                <span>
                                    02
                                </span>

                                <strong>
                                    Admin
                                    <br />
                                    Review
                                </strong>

                            </div>


                            <div className="work__workflow-connector">
                                <span></span>
                                <ArrowDownRight
                                    size={20}
                                    strokeWidth={1.4}
                                />
                            </div>


                            <div className="work__workflow-node">

                                <span>
                                    03
                                </span>

                                <strong>
                                    Room / Bed
                                    <br />
                                    Assignment
                                </strong>

                            </div>


                            <div className="work__workflow-connector">
                                <span></span>
                                <ArrowDownRight
                                    size={20}
                                    strokeWidth={1.4}
                                />
                            </div>


                            <div className="work__workflow-node">

                                <span>
                                    04
                                </span>

                                <strong>
                                    Contract
                                    <br />
                                    Selection
                                </strong>

                            </div>


                            <div className="work__workflow-connector">
                                <span></span>
                                <ArrowDownRight
                                    size={20}
                                    strokeWidth={1.4}
                                />
                            </div>


                            <div className="work__workflow-node">

                                <span>
                                    05
                                </span>

                                <strong>
                                    Payment
                                    <br />
                                    Workflow
                                </strong>

                            </div>

                        </div>

                    </div>


                    {/* =================================================
              STACK
          ================================================= */}

                    <div className="work__stack">

                        <div className="work__stack-heading">

                            <span className="work__micro-label">
                                Production stack
                            </span>

                            <span className="work__stack-count">
                                06 Technologies
                            </span>

                        </div>


                        <div className="work__stack-grid">

                            {featuredProject.stack.map(
                                (technology, index) => (
                                    <div
                                        className="work__stack-item"
                                        key={technology}
                                    >
                                        <span>
                                            0{index + 1}
                                        </span>

                                        <strong>
                                            {technology}
                                        </strong>

                                    </div>
                                )
                            )}

                        </div>

                    </div>

                </article>


                {/* =================================================
            OTHER PROJECTS
        ================================================= */}

                <div className="work__other-projects">

                    <div className="work__other-header">

                        <span className="work__micro-label">
                            More selected work
                        </span>

                        <p>
                            Additional full-stack and connected systems.
                        </p>

                    </div>


                    {projects
                        .filter((project) => !project.featured)
                        .map((project) => (

                            <article
                                className="work__project-row"
                                id={`project-${project.number}`}
                                key={project.number}
                            >

                                <span className="work__project-row-number">
                                    {project.number}
                                </span>


                                <div className="work__project-row-main">

                                    <span className="work__project-row-category">
                                        {project.category}
                                    </span>

                                    <h3>
                                        {project.fullName}
                                    </h3>

                                    <p>
                                        {project.description}
                                    </p>

                                </div>


                                <div className="work__project-row-side">

                                    <div className="work__project-row-stack">

                                        {project.stack.map((technology) => (
                                            <span key={technology}>
                                                {technology}
                                            </span>
                                        ))}

                                    </div>


                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="work__project-link"
                                        >
                                            <GitFork
                                                size={18}
                                                strokeWidth={1.6}
                                            />

                                            <span>
                                                GitHub
                                            </span>
                                            <ArrowUpRight
                                                size={16}
                                                strokeWidth={1.6}
                                            />
                                        </a>
                                    )}

                                </div>

                            </article>

                        ))}

                </div>

            </div>
        </section>
    );
}

export default Work;