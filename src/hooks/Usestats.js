// src/hooks/useStats.js
// Computes Hero stats dynamically from the data arrays.
// Add a new project to PROJECTS or cert to CERTIFICATIONS and the
// counts update automatically. Years of experience is calculated
// from the earliest startDate in EXPERIENCE to today.

import { useMemo } from "react";
import { EXPERIENCE, PROJECTS, CERTIFICATIONS } from "../data";

export default function useStats() {
  return useMemo(() => {
    // ── Years of experience ──────────────────────────────────
    // Find the earliest startDate across all experience entries.
    const earliestStart = EXPERIENCE.reduce((earliest, job) => {
      const d = new Date(job.startDate);
      return d < earliest ? d : earliest;
    }, new Date());

    const today = new Date();
    const msPerYear = 1000 * 60 * 60 * 24 * 365.25;
    const totalYears = (today - earliestStart) / msPerYear;

    // Round down to a whole number, then show "X+" to indicate ongoing.
    const yearsDisplay = `${totalYears.toFixed(1)}`;

    // ── Project count ────────────────────────────────────────
    const projectsDisplay = `${PROJECTS.length}+`;

    // ── Certification count ──────────────────────────────────
    const certsDisplay = `${CERTIFICATIONS.length}+`;

    return [
      { value: yearsDisplay, label: "Years exp." },
      { value: projectsDisplay, label: "Projects" },
      { value: certsDisplay, label: "Certs" },
    ];
  }, []);
}
