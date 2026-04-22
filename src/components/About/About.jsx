// src/components/About/About.jsx
import { GitHubIcon, LinkedInIcon, EmailIcon } from "../Icons/Icons";
import styles from "./About.module.css";

const DETAILS = [
  {
    icon: <EmailIcon size={18} />,
    label: "Email",
    value: "roshankhandagale08@gmail.com",
    href: "mailto:roshankhandagale08@gmail.com",
  },
  {
    icon: "📍",
    label: "Location",
    value: "Nagpur, Maharashtra, India",
    href: null,
  },
  {
    icon: <LinkedInIcon size={18} />,
    label: "LinkedIn",
    value: "linkedin.com/roshan-khandagale",
    href: "https://linkedin.com/in/roshan-khandagale",
  },
  {
    icon: <GitHubIcon size={18} />,
    label: "GitHub",
    value: "github.com/ROSHAN-KHANDAGALE",
    href: "https://github.com/ROSHAN-KHANDAGALE",
  },
];

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">Who I Am</div>
          <h2 className="section-title">
            About <span>Me</span>
          </h2>
        </div>

        <div className={styles.grid}>
          {/* Bio text */}
          <div className={`${styles.text} reveal`}>
            <p>
              I'm a <strong>Backend Developer and GenAI Engineer</strong> based
              in Nagpur, India, with hands-on experience building scalable REST
              APIs and backend services using Python, FastAPI, and Django.
            </p>
            <p>
              I specialize in integrating AI/GenAI features — including{" "}
              <strong>LLM integration</strong>, Retrieval-Augmented Generation
              (RAG), and LangChain — into production-grade systems.
            </p>
            <p>
              Currently at <strong>Quantum Integrators Pvt. Ltd.</strong> as a
              Junior Software Engineer, architecting FastAPI microservices,
              optimizing PostgreSQL schemas, and integrating AI-based LLM
              capabilities into live backend workflows.
            </p>
            <p>
              When I'm not building backend systems, I'm exploring the
              intersection of AI and real-world applications — from
              voice-to-chat pipelines to gesture-controlled quiz games.
            </p>
          </div>

          {/* Detail cards */}
          <div className="reveal rd2">
            {DETAILS.map(({ icon, label, value, href }) => (
              <div key={label} className={styles.detailCard}>
                <div className={styles.detailLabel}>
                  <span className={styles.detailIcon}>{icon}</span>
                  {label}
                </div>
                <div className={styles.detailValue}>
                  {href ? (
                    <a href={href} target="_blank" rel="noreferrer">
                      {value}
                    </a>
                  ) : (
                    value
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
