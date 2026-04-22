// src/components/Contact/Contact.jsx
import { useState } from "react";
import { CONTACT_LINKS } from "../../data/index";
import { sendEmail, isConfigured } from "../../utils/emailjs";
import { GitHubIcon, LinkedInIcon, EmailIcon } from "../Icons/Icons";
import styles from "./Contact.module.css";

const INITIAL_FORM = { name: "", email: "", subject: "", message: "" };

// Maps icon key from data/index.js → SVG component
function ContactIcon({ name }) {
  const props = { size: 20 };
  switch (name) {
    case "github":
      return <GitHubIcon {...props} />;
    case "linkedin":
      return <LinkedInIcon {...props} />;
    case "email":
      return <EmailIcon {...props} />;
    default:
      return null;
  }
}

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState(null); // { type: "success"|"error"|"sending", msg }
  const [sending, setSending] = useState(false);

  const onChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const validate = () => {
    const { name, email, subject, message } = form;
    if (!name || !email || !subject || !message)
      return "Please fill in all fields.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return "Please enter a valid email address.";
    return null;
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const error = validate();
    if (error) {
      setStatus({ type: "error", msg: error });
      return;
    }

    if (!isConfigured) {
      setStatus({
        type: "error",
        msg: "⚠ EmailJS not configured yet — see src/utils/emailjs.js for setup instructions.",
      });
      return;
    }

    setSending(true);
    setStatus({ type: "sending", msg: "Sending your message…" });

    try {
      await sendEmail(form);
      setStatus({
        type: "success",
        msg: "✓ Message sent! I'll get back to you soon.",
      });
      setForm(INITIAL_FORM);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus({
        type: "error",
        msg: "Failed to send. Please email me directly at roshankhandagale08@gmail.com",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">Let's Connect</div>
          <h2 className="section-title">
            Get In <span>Touch</span>
          </h2>
        </div>

        <div className={styles.grid}>
          {/* Left — contact info */}
          <div className="reveal">
            <h3 className={styles.heading}>Open to opportunities</h3>
            <p className={styles.subtext}>
              I'm currently open to backend engineering and AI/GenAI roles.
              Whether you have a project in mind, a job opportunity, or just
              want to say hi — my inbox is always open.
            </p>

            <div className={styles.linkList}>
              {CONTACT_LINKS.map(({ icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className={styles.linkItem}
                >
                  <span className={styles.linkIcon}>
                    <ContactIcon name={icon} />
                  </span>
                  <div className={styles.linkText}>
                    <div className={styles.linkLabel}>{label}</div>
                    <div className={styles.linkValue}>{value}</div>
                  </div>
                  <span className={styles.linkArrow}>→</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right — contact form */}
          <div className="reveal rd2">
            <form className={styles.form} onSubmit={onSubmit} noValidate>
              <div className={styles.formRow}>
                <FormGroup label="Name">
                  <input
                    className={styles.input}
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    placeholder="Your name"
                  />
                </FormGroup>

                <FormGroup label="Email">
                  <input
                    className={styles.input}
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={onChange}
                    placeholder="your@email.com"
                  />
                </FormGroup>
              </div>

              <FormGroup label="Subject">
                <input
                  className={styles.input}
                  name="subject"
                  value={form.subject}
                  onChange={onChange}
                  placeholder="What's this about?"
                />
              </FormGroup>

              <FormGroup label="Message">
                <textarea
                  className={styles.textarea}
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  placeholder="Tell me about your project or opportunity…"
                />
              </FormGroup>

              <button
                type="submit"
                className={styles.submitBtn}
                disabled={sending}
              >
                {sending ? "Sending…" : "Send Message →"}
              </button>

              {status && (
                <div className={`${styles.status} ${styles[status.type]}`}>
                  {status.msg}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// Small reusable label + input wrapper
function FormGroup({ label, children }) {
  return (
    <div
      className="form-group"
      style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
    >
      <label
        style={{
          fontFamily: "var(--fm)",
          fontSize: "0.68rem",
          color: "var(--text-dim)",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
        }}
      >
        {label}
      </label>
      {children}
    </div>
  );
}
