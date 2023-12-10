import { Rules } from "./AddCompetition";
import styles from "./AddCompetition.module.scss";

type Props = {
  rules: Rules;
  changeRules: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const GeneralInfo = ({ rules, changeRules }: Props) => {
  return (
    <section className={styles.generalInfo}>
      <h2 className={styles.title}>Informatii generale</h2>
      <div className={styles.fields}>
        <div className={styles.field}>
          <label htmlFor="nume">Nume Competitie</label>
          <input
            type="text"
            id="nume"
            name="nume"
            value={rules.nume}
            onChange={changeRules}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="locatie">Locație</label>
          <input
            type="text"
            name="locatie"
            id="locatie"
            value={rules.locatie}
            onChange={changeRules}
          />
        </div>
      </div>
      <div className={styles.dates}>
        <div className={styles.dateContainer}>
          <label htmlFor="date">Perioada competitie</label>
          <div className={styles.d}>
            <input
              type="date"
              id="dSCompetitie"
              name="startCompetitie"
              onChange={changeRules}
            />
            <input
              type="date"
              id="dFCompetitie"
              name="sfarsitCompetitie"
              onChange={changeRules}
            />
          </div>
        </div>
        <div className={styles.dateContainer}>
          <label htmlFor="date">Perioada Inscrieri</label>
          <div className={styles.d}>
            <input
              type="date"
              id="dSInscrieri"
              name="startInscrieri"
              onChange={changeRules}
            />
            <input
              type="date"
              id="dFInscrieri"
              name="sfarsitInscrieri"
              onChange={changeRules}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeneralInfo;
