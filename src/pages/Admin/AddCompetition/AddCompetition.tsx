import Header from "../../../components/PageHeader/Header";
import styles from "./AddCompetition.module.scss";
import GeneralInfo from "./GeneralInfo";

type Props = {
  openSidebar: () => void;
};

const AddCompetition = ({ openSidebar }: Props) => {
  return (
    <div className={styles.container}>
      <Header openSidebar={openSidebar} message="Adaugă competiție" />
      <main className={styles.page}>
        <GeneralInfo />
        
      </main>
    </div>
  );
};

export default AddCompetition;
