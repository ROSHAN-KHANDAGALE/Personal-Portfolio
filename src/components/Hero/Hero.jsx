// src/components/Hero/Hero.jsx
import useStats from "../../hooks/Usestats";
import styles from "./Hero.module.css";

export default function Hero() {
  // Dynamically computed from data/index.js — no manual updates needed.
  // Years exp  → calculated from earliest EXPERIENCE startDate to today.
  // Projects   → PROJECTS.length
  // Certs      → CERTIFICATIONS.length
  const stats = useStats();

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.tag}>Available for work</div>

        <h1 className={styles.name}>
          Roshan
          <br />
          <span className={styles.accent}>Khandagale</span>
        </h1>

        <div className={styles.titles}>
          {["Backend Developer", "AI / GenAI Engineer", "FastAPI · Python"].map(
            (t) => (
              <span key={t} className={styles.pill}>
                {t}
              </span>
            ),
          )}
        </div>

        <p className={styles.desc}>
          Building scalable REST APIs and intelligent backend systems.
          Specialized in LLM integration, RAG pipelines, and production-grade AI
          workflows.
        </p>

        <div className={styles.cta}>
          <a href="#projects" className="btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn-outline">
            Get in Touch
          </a>
        </div>

        <div className={styles.stats}>
          {stats.map(({ value, label }) => (
            <div key={label} className={styles.stat}>
              <span className={styles.statNum}>{value}</span>
              <span className={styles.statLabel}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
