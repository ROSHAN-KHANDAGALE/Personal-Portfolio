// src/components/Experience/Experience.jsx
import { EXPERIENCE } from "../../data";
import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <section id="experience" className={styles.experience}>
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">Where I've Worked</div>
          <h2 className="section-title">Work <span>Experience</span></h2>
        </div>

        <div className={styles.timeline}>
          {EXPERIENCE.map((job, i) => (
            <div key={job.company} className={`${styles.item} reveal rd${i + 1}`}>
              <div className={styles.dot} />

              <div className={styles.meta}>
                <div>
                  <div className={styles.company}>{job.company}</div>
                  <div className={styles.role}>{job.role}</div>
                  <div className={styles.location}>📍 {job.location}</div>
                </div>
                <span className={styles.period}>{job.period}</span>
              </div>

              <ul className={styles.points}>
                {job.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
