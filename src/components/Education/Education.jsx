import { EDUCATION, CERTIFICATIONS } from "../../data";
import styles from "./Education.module.css";

export default function Education() {
  return (
    <section id="education" className={styles.education}>
      <div className="container">
        {/* Degrees */}
        <div className="section-header reveal">
          <div className="section-tag">Academic Background</div>
          <h2 className="section-title">Education & <span>Certs</span></h2>
        </div>

        <div className={styles.eduGrid}>
          {EDUCATION.map((edu, i) => (
            <div key={edu.degree} className={`${styles.eduCard} reveal rd${i + 1}`}>
              <span className={styles.eduIcon}>{edu.icon}</span>
              <div className={styles.degree}>{edu.degree}</div>
              <div className={styles.uni}>{edu.uni}</div>
              <div className={styles.period}>{edu.period}</div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="section-header reveal" style={{ marginTop: "3rem", marginBottom: "1.5rem" }}>
          <div className="section-tag">Credentials</div>
          <h3 className={styles.certsTitle}>Certifications</h3>
        </div>

        <div className={styles.certsGrid}>
          {CERTIFICATIONS.map((cert, i) => (
            <div key={cert.title} className={`${styles.certCard} reveal rd${(i % 3) + 1}`}>
              <span className={styles.certIcon}>{cert.icon}</span>
              <div>
                <div className={styles.certTitle}>{cert.title}</div>
                <div className={styles.certIssuer}>{cert.issuer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
