import { Link } from "react-router-dom";
import styles from "./Competitions.module.scss";
import { Rules } from "../../../types/competitie";

type Props = {
  competition: Rules;
};

const CompetitionCard = ({ competition }: Props) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.competitionName}>{competition.nume}</h2>
      {competition.activaFlag && (
        <p
          className={styles.competitionStatus}
          style={{ color: competition.inscrieriFlag ? "green" : "red" }}
        >
          Inscrieri {competition.inscrieriFlag ? "sunt" : "nu sunt"} active
        </p>
      )}
      <img
        className={styles.competitionBanner}
        src={`${import.meta.env.VITE_API_URL}/img/banners/${
          competition.banner
        }`}
      />
      <Link to={`/competitii/${competition.slug}`}>
        <button className={`button ${styles.competitionButton}`}>
          Mai mult
        </button>
      </Link>
    </div>
  );
};

export default CompetitionCard;
