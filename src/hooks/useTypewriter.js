// src/hooks/useTypewriter.js
import { useState, useEffect } from "react";

const ROLES = [
  "Backend Developer",
  "GenAI Engineer",
  "API Architect",
  "LLM Integration Dev",
  "FastAPI Dev",
];

const TYPE_SPEED = 80; // ms per character while typing
const DELETE_SPEED = 40; // ms per character while deleting
const PAUSE_END = 1800; // ms to pause after fully typed
const PAUSE_START = 400; // ms to pause before typing next word

export default function useTypewriter(roles = ROLES) {
  const [displayed, setDisplayed] = useState(""); // text currently shown
  const [roleIndex, setRoleIndex] = useState(0); // which role we're on
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const current = roles[roleIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Still typing
          if (displayed.length < current.length) {
            setDisplayed(current.slice(0, displayed.length + 1));
          } else {
            // Fully typed — pause before deleting
            setIsPaused(true);
            setTimeout(() => {
              setIsPaused(false);
              setIsDeleting(true);
            }, PAUSE_END);
          }
        } else {
          // Deleting
          if (displayed.length > 0) {
            setDisplayed(current.slice(0, displayed.length - 1));
          } else {
            // Fully deleted — pause before typing next
            setIsDeleting(false);
            setIsPaused(true);
            setTimeout(() => {
              setIsPaused(false);
              setRoleIndex((prev) => (prev + 1) % roles.length);
            }, PAUSE_START);
          }
        }
      },
      isDeleting ? DELETE_SPEED : TYPE_SPEED,
    );

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, isPaused, roleIndex, roles]);

  return displayed;
}
