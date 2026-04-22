import { SKILLS } from "../../data";
import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">What I Work With</div>
          <h2 className="section-title">Technical <span>Skills</span></h2>
        </div>

        <div className={styles.grid}>
          {SKILLS.map((skill, i) => (
            <div key={skill.title} className={`${styles.card} reveal rd${(i % 3) + 1}`}>
              <span className={styles.icon}>{skill.icon}</span>
              <div className={styles.title}>{skill.title}</div>
              <div className={styles.tags}>
                {skill.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
