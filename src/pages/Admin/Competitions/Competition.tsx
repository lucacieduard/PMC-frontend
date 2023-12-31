import { Rules } from "../../../types/competitie";
import styles from "./Competitions.module.scss";

const Competition = ({ competition }: { competition: Rules }) => {
  return (
    <div className={styles.competition}>
      <h2 className={styles.compTitle}>{competition.nume}</h2>
      <p className={styles.period}>
        Competitie:{" "}
        {competition.startCompetitie.split("T")[0].replaceAll("-", ".")} -{" "}
        {competition.sfarsitCompetitie.split("T")[0].replaceAll("-", ".")}
      </p>
      <img
        src={`${import.meta.env.VITE_API_URL}/img/banners/${
          competition.banner
        }`}
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
