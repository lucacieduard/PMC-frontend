import CompetitionCard from "./CompetitionCard";
import styles from "./Competitions.module.scss";

const CompetitionsPage = () => {
  return (
    <div className={styles.page}>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Competiti viitoare</h2>
        <div className={styles.competitions}>
          <CompetitionCard />
          <CompetitionCard />
          <CompetitionCard />
        </div>
      </section>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Competiti finalizate</h2>
        <div className={styles.competitions}>
          <CompetitionCard />
          <CompetitionCard />
          <CompetitionCard />
        </div>
      </section>
    </div>
  );
};

export default CompetitionsPage;
