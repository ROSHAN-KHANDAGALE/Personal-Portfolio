import { GitHubCalendar } from "react-github-calendar";
import styles from "./GitHubGraph.module.css";

export default function GitHubGraph() {
  return (
    <section id="github" className={styles.section}>
      <div className="container">
        <div className={styles.calendarLayout}>
          {/* Left — summary stats */}
          <div className={styles.calendarSummary}>
            <div className={styles.summaryItem}>
              <span className={styles.summaryNum}>55</span>
              <span className={styles.summaryLabel}>Contributions</span>
              <span className={styles.summaryPeriod}>Last 6 months</span>
            </div>
            <div className={styles.summaryDivider} />
            <div className={styles.summaryItem}>
              <span className={styles.summaryNum}>12+</span>
              <span className={styles.summaryLabel}>Repositories</span>
              <span className={styles.summaryPeriod}>Public</span>
            </div>
            <div className={styles.summaryDivider} />
            <div className={styles.summaryItem}>
              <span className={styles.summaryNum}>2+</span>
              <span className={styles.summaryLabel}>Years</span>
              <span className={styles.summaryPeriod}>On GitHub</span>
            </div>
          </div>

          {/* Right — calendar */}
          <div className={styles.calendarWrap}>
            <GitHubCalendar
              username="ROSHAN-KHANDAGALE"
              colorScheme="dark"
              blockSize={13}
              blockMargin={5}
              fontSize={13}
              theme={{
                dark: [
                  "#1c1f23", 
                  "#003d3b",
                  "#005e5b",
                  "#008f8a",
                  "#00d2c8",
                ],
              }}
              transformData={(data) => {
                const sixMonthsAgo = new Date();
                sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
                return data.filter((d) => new Date(d.date) >= sixMonthsAgo);
              }}
            />
          </div>

          {/* Stats row */}
          <div className={styles.statsRow}>
            <StatPill label="Profile" value="ROSHAN-KHANDAGALE" />
            <StatPill label="Platform" value="GitHub" />
            <StatPill label="Updated" value="Live" accent />
          </div>
        </div>
      </div>
    </section>
  );
}

function StatPill({ label, value, accent }) {
  return (
    <div className={styles.statPill}>
      <span className={styles.statLabel}>{label}</span>
      <span
        className={`${styles.statValue} ${accent ? styles.accentValue : ""}`}
      >
        {value}
      </span>
    </div>
  );
}
