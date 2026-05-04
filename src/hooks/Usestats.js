import { useMemo } from "react";
import { EXPERIENCE, PROJECTS, CERTIFICATIONS } from "../data";

export default function useStats() {
  return useMemo(() => {

    const earliestStart = EXPERIENCE.reduce((earliest, job) => {
      const d = new Date(job.startDate);
      return d < earliest ? d : earliest;
    }, new Date());

    const today = new Date();
    const msPerYear = 1000 * 60 * 60 * 24 * 365.25;
    const totalYears = (today - earliestStart) / msPerYear;

    const yearsDisplay = `${totalYears.toFixed(1)}`;
   
    const projectsDisplay = `${PROJECTS.length}+`;

    const certsDisplay = `${CERTIFICATIONS.length}+`;

    return [
      { value: yearsDisplay, label: "Years exp." },
      { value: projectsDisplay, label: "Projects" },
      { value: certsDisplay, label: "Certs" },
    ];
  }, []);
}
