import { useState, useEffect } from "react";
import { NAV_LINKS } from "../../data/index";
import styles from "./Navbar.module.css";

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled,    setScrolled]    = useState(false);
  const [mobileOpen,  setMobileOpen]  = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      // Calculate how far user has scrolled through the page (0–100)
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(pct);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
        {/* Logo */}
        <div
          className={styles.logo}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          RK<span>.</span>
        </div>

        {/* Desktop links */}
        <ul className={styles.navLinks}>
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`}>{link}</a>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className={styles.actions}>
          <a
            className={styles.cvBtn}
            href={process.env.REACT_APP_CV_URL}
            download
          >
            ↓ Resume
          </a>

          <button
            className={styles.paletteHint}
            onClick={() => {
              window.dispatchEvent(
                new KeyboardEvent("keydown", {
                  key: "/",
                  metaKey: true,
                  bubbles: true,
                }),
              );
            }}
            aria-label="Open command palette"
            title="Command Palette (Ctrl+/)"
          >
            <span>⌘/</span>
          </button>
        </div>

        {/* Hamburger */}
        <button
          className={styles.burger}
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <span />
          <span />
          <span />
        </button>

        <div className={styles.progressBar}>
          <div
            className={styles.progressFill}
            style={{ width: `${progress}%` }}
          />
        </div>
      </nav>

      {/* Mobile overlay */}
      <div className={`${styles.mobileMenu} ${mobileOpen ? styles.open : ""}`}>
        <button
          className={styles.mobileClose}
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
        >
          ✕
        </button>
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            onClick={() => scrollTo(link)}
          >
            {link}
          </a>
        ))}
      </div>
    </>
  );
}
