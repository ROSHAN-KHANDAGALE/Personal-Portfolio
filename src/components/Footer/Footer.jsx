import styles from "./Footer.module.css";

const FOOTER_LINKS = [
  { label: "Email",    href: "mailto:roshankhandagale08@gmail.com" },
  { label: "LinkedIn", href: "https://linkedin.com/in/roshan-khandagale" },
  { label: "GitHub",   href: "https://github.com/ROSHAN-KHANDAGALE" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.copy}>
          © RK. <span>Roshan Khandagale</span>.
        </p>

        <nav className={styles.links}>
          {FOOTER_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
