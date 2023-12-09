import styles from "./AddCompetition.module.scss";
import Category from "./Category";

const Categories = () => {
  return (
    <section className={styles.categoriesContainer}>
      <h2 className={styles.title}>Categorii de vârstă și probe</h2>
      <div className={styles.inputContainer}>
        <label htmlFor="categorie">Categorie de vârstă</label>
        <div className={styles.input}>
          <input type="text" id="categorie" />
          <button>Adaugă</button>
        </div>
      </div>

      <div className={styles.probe}>
        <Category />
        <Category />
        <Category />
        <Category />
      </div>
    </section>
  );
};

export default Categories;
