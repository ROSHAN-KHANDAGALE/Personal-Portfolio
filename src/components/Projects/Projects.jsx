// src/components/Projects/Projects.jsx
import { useState } from "react";
import { PROJECTS } from "../../data/index";
import styles from "./Projects.module.css";

const FILTERS = [
  { key: "all", label: "All" },
  { key: "ai", label: "AI / GenAI" },
  { key: "backend", label: "Backend" },
  { key: "fullstack", label: "Full Stack" },
  { key: "more", label: "More",}
];

export default function Projects() {
  const [active, setActive] = useState("all");

  const visible = PROJECTS.filter(
    (p) => active === "all" || p.category.includes(active),
  );

  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">What I've Built</div>
          <h2 className="section-title">
            Featured <span>Projects</span>
          </h2>
        </div>

        {/* Filter buttons */}
        <div className={`${styles.filters} reveal`}>
          {FILTERS.map(({ key, label }) => (
            <button
              key={key}
              className={`${styles.filterBtn} ${active === key ? styles.active : ""}`}
              onClick={() => setActive(key)}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Project cards */}
        <div className={styles.grid}>
          {visible.map((project, i) => (
            <ProjectCard key={project.num} project={project} delay={i % 3} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, delay }) {
  return (
    <div className={styles.card} style={{ animationDelay: `${delay * 0.08}s` }}>
      {project.badge && <span className={styles.badge}>{project.badge}</span>}

      <div className={styles.cardHeader}>
        <span className={styles.num}>{project.num}</span>
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className={styles.ghLink}
          title="GitHub"
        >
          ⎇
        </a>
      </div>

      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.desc}>{project.desc}</p>

      <div className={styles.techTags}>
        {project.tech.map((t) => (
          <span key={t} className={styles.techTag}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
