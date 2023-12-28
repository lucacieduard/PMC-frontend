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
      <button className={`button ${styles.competitionButton}`}>Mai mult</button>
    </div>
  );
};

export default CompetitionCard;
