// src/components/CurrentlyLearning/CurrentlyLearning.jsx
import { CURRENTLY_LEARNING } from "../../data";
import styles from "./CurrentlyLearning.module.css";

export default function CurrentlyLearning() {
  return (
    <section id="learning" className={styles.section}>
      <div className="container">

        <div className="section-header reveal">
          <div className="section-tag">Always Growing</div>
          <h2 className="section-title">Currently <span>Learning</span></h2>
        </div>

        {/* Intro line */}
        <p className={`${styles.intro} reveal`}>
          Things I'm actively exploring right now — updated as I grow.
        </p>

        <div className={styles.grid}>
          {CURRENTLY_LEARNING.map((item, i) => (
            <LearningCard key={item.title} item={item} delay={i % 3} />
          ))}
        </div>

      </div>
    </section>
  );
}

function LearningCard({ item, delay }) {
  return (
    <div className={`${styles.card} reveal rd${delay + 1}`}>

      {/* Tag pill — top right */}
      <span className={styles.tag}>{item.tag}</span>

      {/* Icon + Title */}
      <div className={styles.cardTop}>
        <span className={styles.icon}>{item.icon}</span>
        <h3 className={styles.title}>{item.title}</h3>
      </div>

      {/* Description */}
      <p className={styles.desc}>{item.description}</p>

      {/* Progress bar */}
      <div className={styles.progressWrap}>
        <div className={styles.progressMeta}>
          <span className={styles.progressLabel}>Progress</span>
          <span className={styles.progressPct}>{item.progress}%</span>
        </div>
        <div className={styles.progressTrack}>
          <div
            className={styles.progressFill}
            style={{ width: `${item.progress}%` }}
          />
        </div>
      </div>

      {/* Resource link */}
      <a
        href={item.resourceUrl}
        target="_blank"
        rel="noreferrer"
        className={styles.resourceLink}
      >
        <span>📖 {item.resource}</span>
        <span className={styles.arrow}>→</span>
      </a>

    </div>
  );
}