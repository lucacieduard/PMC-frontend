import { Proba, Rules } from "../../../types/competitie";
import styles from "./AddCompetition.module.scss";
import Category from "./Category";
import { useState } from "react";

type Props = {
  addCategory: (categoryName: string) => void;
  rules: Rules;
  addProba: (proba: Proba, categoryName: string) => void;
  deleteCategory: (categoryName: string) => void;
  deleteProba: (categoryName: string, probaNume: string) => void;
};

const Categories = ({
  addCategory,
  rules,
  addProba,
  deleteCategory,
  deleteProba,
}: Props) => {
  const [category, setCategory] = useState<string>("");
  return (
    <section className={styles.categoriesContainer}>
      <h2 className={styles.title}>Categorii de vârstă și probe</h2>
      <div className={styles.inputContainer}>
        <label htmlFor="categorie">Categorie de vârstă</label>
        <div className={styles.input}>
          <input
            type="text"
            id="categorie"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          />
          <button
            onClick={() => {
              addCategory(category);
              setCategory("");
            }}
          >
            Adaugă
          </button>
        </div>
      </div>
      {rules.categorii.length > 0 && (
        <div className={styles.probe}>
          {rules.categorii.map((category, index) => {
            return (
              <Category
                key={index}
                category={category}
                addProba={addProba}
                deleteCategory={deleteCategory}
                deleteProba={deleteProba}
              />
            );
          })}
        </div>
      )}
    </section>
  );
};

export default Categories;
