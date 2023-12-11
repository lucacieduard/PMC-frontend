import Header from "../../../components/PageHeader/Header";
import Competition from "./Competition";
import styles from "./Competitions.module.scss";

type Props = {
  openSidebar: () => void;
};

const Competitions = ({ openSidebar }: Props) => {
  return (
    <div className={styles.container}>
      <Header message="Competiții" openSidebar={openSidebar} />
      <div className={styles.page}>
        <h1>Toate competitiile</h1>
        <div className={styles.competitions}>
          <Competition />
          <Competition />
          <Competition />
          <Competition />
        </div>
      </div>
    </div>
  );
};

export default Competitions;
