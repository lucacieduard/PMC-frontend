import styles from "./AddCompetition.module.scss";
import { FaTrashAlt } from "react-icons/fa";
import Tiket from "./Tiket";

const Category = () => {
  return (
    <div className={styles.category}>
      <div className={styles.left}>
        <h3 className={styles.title}>
          <span>Categorie : Spiriduși </span>
          <FaTrashAlt color="red" className={styles.icon} />
        </h3>

        <div className={styles.inputContainer}>
          <label>Adaugă o probă</label>
          <div className={styles.input}>
            <input type="text" id="proba" />
            <button>Adaugă</button>
          </div>
          <div className={styles.control}>
            <div className={styles.checkBoxContainer}>
              <input type="checkbox" />
              <label>Serii</label>
            </div>
            <div className={styles.checkBoxContainer}>
              <input type="checkbox" />
              <label>Finala</label>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <Tiket />
        <Tiket />
        <Tiket />

        <Tiket />
      </div>
    </div>
  );
};

export default Category;
