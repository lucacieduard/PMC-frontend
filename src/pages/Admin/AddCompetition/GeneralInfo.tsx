import styles from "./AddCompetition.module.scss";

const GeneralInfo = () => {
  return (
    <section className={styles.generalInfo}>
      <h2 className={styles.title}>Informatii generale</h2>
      <div className={styles.fields}>
        <div className={styles.field}>
          <label htmlFor="nume">Nume Competitie</label>
          <input type="text" id="nume" />
        </div>
        <div className={styles.field}>
          <label htmlFor="locatie">Locație</label>
          <input type="text" id="locatie" />
        </div>
      </div>
      <div className={styles.dates}>
        <div className={styles.dateContainer}>
          <label htmlFor="date">Perioada competitie</label>
          <div className={styles.d}>
            <input type="date" id="dSCompetitie" />
            <input type="date" id="dFCompetitie" />
          </div>
        </div>
        <div className={styles.dateContainer}>
          <label htmlFor="date">Perioada Inscrieri</label>
          <div className={styles.d}>
            <input type="date" id="dSInscrieri" />
            <input type="date" id="dFInscrieri" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeneralInfo;
