import { useState, useEffect, useRef, useCallback } from "react";
import styles from "./CommandPalette.module.css";

// ── All available commands ──────────────────────────────────
const COMMANDS = [
  // Navigation
  {
    id: "home",
    group: "Navigate",
    icon: "🏠",
    label: "Go to Home",
    action: "scroll",
    target: "home",
  },
  {
    id: "about",
    group: "Navigate",
    icon: "👤",
    label: "Go to About",
    action: "scroll",
    target: "about",
  },
  {
    id: "skills",
    group: "Navigate",
    icon: "🛠️",
    label: "Go to Skills",
    action: "scroll",
    target: "skills",
  },
  {
    id: "projects",
    group: "Navigate",
    icon: "💻",
    label: "Go to Projects",
    action: "scroll",
    target: "projects",
  },
  {
    id: "experience",
    group: "Navigate",
    icon: "💼",
    label: "Go to Experience",
    action: "scroll",
    target: "experience",
  },
  {
    id: "github-sec",
    group: "Navigate",
    icon: "📊",
    label: "Go to GitHub Activity",
    action: "scroll",
    target: "github",
  },
  {
    id: "learning",
    group: "Navigate",
    icon: "🧠",
    label: "Go to Currently Learning",
    action: "scroll",
    target: "learning",
  },
  {
    id: "education",
    group: "Navigate",
    icon: "🎓",
    label: "Go to Education",
    action: "scroll",
    target: "education",
  },
  {
    id: "contact",
    group: "Navigate",
    icon: "✉️",
    label: "Go to Contact",
    action: "scroll",
    target: "contact",
  },

  // Links
  {
    id: "gh-profile",
    group: "Links",
    icon: "⎇",
    label: "Open GitHub Profile",
    action: "link",
    target: "https://github.com/ROSHAN-KHANDAGALE",
  },
  {
    id: "linkedin",
    group: "Links",
    icon: "💼",
    label: "Open LinkedIn",
    action: "link",
    target: "https://linkedin.com/in/roshan-khandagale",
  },
  {
    id: "email",
    group: "Links",
    icon: "📧",
    label: "Send an Email",
    action: "link",
    target: "mailto:roshan.khandagale07@gmail.com",
  },
  {
    id: "resume",
    group: "Links",
    icon: "📄",
    label: "Download Resume",
    action: "link",
    target: "/Roshan_Khandagale_CV.pdf",
  },

  // Actions
  {
    id: "theme",
    group: "Actions",
    icon: "🎨",
    label: "Toggle Dark / Light Mode",
    action: "theme",
    target: null,
  },
  {
    id: "top",
    group: "Actions",
    icon: "⬆️",
    label: "Scroll to Top",
    action: "top",
    target: null,
  },
];

// Group commands by their group key
function groupCommands(commands) {
  return commands.reduce((acc, cmd) => {
    if (!acc[cmd.group]) acc[cmd.group] = [];
    acc[cmd.group].push(cmd);
    return acc;
  }, {});
}

export default function CommandPalette({ toggleTheme }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(0); // index in filtered list
  const inputRef = useRef(null);
  const listRef = useRef(null);

  // ── Filter commands by query ──────────────────────────────
  const filtered =
    query.trim() === ""
      ? COMMANDS
      : COMMANDS.filter(
          (cmd) =>
            cmd.label.toLowerCase().includes(query.toLowerCase()) ||
            cmd.group.toLowerCase().includes(query.toLowerCase()),
        );

  const grouped = groupCommands(filtered);

  // ── Open / close ──────────────────────────────────────────
  const openPalette = useCallback(() => {
    setOpen(true);
    setQuery("");
    setFocused(0);
  }, []);
  const closePalette = useCallback(() => {
    setOpen(false);
    setQuery("");
  }, []);

  // ── Global keyboard listener — Cmd+K / Ctrl+K ─────────────
  useEffect(() => {
    const onKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        open ? closePalette() : openPalette();
      }
      if (e.key === "Escape" && open) closePalette();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, openPalette, closePalette]);

  // ── Focus input when opened ───────────────────────────────
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50);
  }, [open]);

  // ── Arrow key navigation inside list ─────────────────────
  const onInputKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setFocused((prev) => Math.min(prev + 1, filtered.length - 1));
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setFocused((prev) => Math.max(prev - 1, 0));
    }
    if (e.key === "Enter") {
      e.preventDefault();
      if (filtered[focused]) executeCommand(filtered[focused]);
    }
  };

  // Scroll focused item into view
  useEffect(() => {
    const el = listRef.current?.querySelector(`[data-focused="true"]`);
    el?.scrollIntoView({ block: "nearest" });
  }, [focused]);

  // Reset focused index when query changes
  useEffect(() => {
    setFocused(0);
  }, [query]);

  // This belongs in CommandPalette.jsx ONLY — not Navbar.jsx
  useEffect(() => {
    const onKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "/") {
        e.preventDefault();
        open ? closePalette() : openPalette();
      }
      if (e.key === "Escape" && open) closePalette();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, openPalette, closePalette]);

  // ── Execute a command ─────────────────────────────────────
  const executeCommand = (cmd) => {
    closePalette();
    switch (cmd.action) {
      case "scroll":
        setTimeout(() => {
          document
            .getElementById(cmd.target)
            ?.scrollIntoView({ behavior: "smooth" });
        }, 150); // slight delay so palette closes first
        break;
      case "link":
        window.open(
          cmd.target,
          cmd.target.startsWith("http") ? "_blank" : "_self",
        );
        break;
      case "theme":
        toggleTheme();
        break;
      case "top":
        window.scrollTo({ top: 0, behavior: "smooth" });
        break;
      default:
        break;
    }
  };

  // ── Flat index tracker for arrow key focus ────────────────
  let flatIndex = 0;

  if (!open) return null;

  return (
    <>
      {/* Backdrop */}
      <div className={styles.backdrop} onClick={closePalette} />

      {/* Palette */}
      <div
        className={styles.palette}
        role="dialog"
        aria-label="Command palette"
      >
        {/* Search input */}
        <div className={styles.searchRow}>
          <span className={styles.searchIcon}>⌘</span>
          <input
            ref={inputRef}
            className={styles.input}
            placeholder="Type a command or search…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={onInputKeyDown}
            autoComplete="off"
            spellCheck="false"
          />
          {query && (
            <button className={styles.clearBtn} onClick={() => setQuery("")}>
              ✕
            </button>
          )}
          <kbd className={styles.escKey}>ESC</kbd>
        </div>

        <div className={styles.divider} />

        {/* Results */}
        <div className={styles.list} ref={listRef}>
          {filtered.length === 0 ? (
            <div className={styles.empty}>
              No commands found for "<strong>{query}</strong>"
            </div>
          ) : (
            Object.entries(grouped).map(([group, cmds]) => (
              <div key={group} className={styles.group}>
                {/* Group label */}
                <div className={styles.groupLabel}>{group}</div>

                {/* Commands in group */}
                {cmds.map((cmd) => {
                  const isFocused = flatIndex === focused;
                  const currentIndex = flatIndex;
                  flatIndex++;

                  return (
                    <div
                      key={cmd.id}
                      data-focused={isFocused}
                      className={`${styles.item} ${isFocused ? styles.itemFocused : ""}`}
                      onClick={() => executeCommand(cmd)}
                      onMouseEnter={() => setFocused(currentIndex)}
                    >
                      <span className={styles.itemIcon}>{cmd.icon}</span>
                      <span className={styles.itemLabel}>{cmd.label}</span>
                      <span className={styles.itemGroup}>{group}</span>
                    </div>
                  );
                })}
              </div>
            ))
          )}
        </div>

        {/* Footer hints */}
        <div className={styles.footer}>
          <span>
            <kbd>↑</kbd>
            <kbd>↓</kbd> navigate
          </span>
          <span>
            <kbd>↵</kbd> select
          </span>
          <span>
            <kbd>ESC</kbd> close
          </span>
        </div>
      </div>
    </>
  );
}
