import { useState, useEffect } from "react";

const ROLES = [
  "Backend Developer",
  "GenAI Engineer",
  "API Architect",
  "LLM Integration Dev",
  "FastAPI Dev",
];

const TYPE_SPEED = 80; 
const DELETE_SPEED = 40; 
const PAUSE_END = 1800; 
const PAUSE_START = 400;

export default function useTypewriter(roles = ROLES) {
  const [displayed, setDisplayed] = useState(""); 
  const [roleIndex, setRoleIndex] = useState(0); 
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const current = roles[roleIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayed.length < current.length) {
            setDisplayed(current.slice(0, displayed.length + 1));
          } else {
            setIsPaused(true);
            setTimeout(() => {
              setIsPaused(false);
              setIsDeleting(true);
            }, PAUSE_END);
          }
        } else {
          if (displayed.length > 0) {
            setDisplayed(current.slice(0, displayed.length - 1));
          } else {
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
