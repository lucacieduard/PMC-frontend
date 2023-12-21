import styles from "./Competitions.module.scss";
const Competition = () => {
  return (
    <div className={styles.competition}>
      <h2 className={styles.compTitle}>Cupa Atletis Junior 2023</h2>
      <p className={styles.period}>Competitie: 10-02-2023 11-02-2023</p>
      <img
        src="/banner.jpg"
        className={styles.banner}
        alt="competition banner"
      />
      <button className={`button ${styles.button}`}>
        Acceseaza competitia
      </button>
    </div>
  );
};

export default Competition;
