import styles from "./AddCompetition.module.scss";
import { FaCheck } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { MdClose } from "react-icons/md";

const Tiket = () => {
  return (
    <div className={styles.tiket}>
      <div className={styles.probaContainer}>
        <p className={styles.titlee}>Probă</p>
        <span className={styles.proba}>100m</span>
      </div>
      <div className={styles.selectorContainer}>
        <p className={styles.titlee}>S/F</p>
        <div className={styles.icons}>
          <p>
            <FaCheck color="green" className={styles.icon} />
          </p>
          <p>
            <MdClose color="red" className={styles.icon} />
          </p>
        </div>
      </div>
      <FaTrashAlt className={styles.trash} />
    </div>
  );
};

export default Tiket;
