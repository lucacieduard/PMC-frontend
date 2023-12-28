import { Link } from "react-router-dom";
import styles from "./Competitions.module.scss";

const CompetitionCard = () => {
  return (
    <div className={styles.card}>
      <h2 className={styles.competitionName}>Cupa atletis Junior 2024</h2>
      <p
        className={styles.competitionStatus}
        // style={{ color: true ? "green" : "red" }}
      >
        Inscrieri active :
      </p>
      <img className={styles.competitionBanner} src="banner.jpg" />
      <Link to={"/competitii/1"}>
        <button className={`button ${styles.competitionButton}`}>
          Mai mult
        </button>
      </Link>
    </div>
  );
};

export default CompetitionCard;
