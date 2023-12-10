import styles from "./AddCompetition.module.scss";
import { FaCheck } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { Proba } from "./AddCompetition";

type Props = {
  proba: Proba;
  deleteProba: (categoryName: string, probaNume: string) => void;
  categoryName: string;
};

const Tiket = ({ proba, deleteProba, categoryName }: Props) => {
  return (
    <div className={styles.tiket}>
      <div className={styles.probaContainer}>
        <p className={styles.titlee}>Probă</p>
        <span className={styles.proba}>{proba.nume}</span>
      </div>
      <div className={styles.selectorContainer}>
        <p className={styles.titlee}>S/F</p>
        <div className={styles.icons}>
          <p>
            {proba.serii ? (
              <FaCheck color="green" className={styles.icon} />
            ) : (
              <MdClose color="red" className={styles.icon} />
            )}
          </p>
          <p>
            {proba.finala ? (
              <FaCheck color="green" className={styles.icon} />
            ) : (
              <MdClose color="red" className={styles.icon} />
            )}
          </p>
        </div>
      </div>
      <FaTrashAlt
        className={styles.trash}
        onClick={() => deleteProba(categoryName, proba.nume)}
      />
    </div>
  );
};

export default Tiket;
