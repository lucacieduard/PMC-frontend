import styles from "./AddCompetition.module.scss";
import { FaTrashAlt } from "react-icons/fa";
import Tiket from "./Tiket";
import { useState } from "react";
import { Categorie, Proba } from "../../../types/competitie";

type Props = {
  category: Categorie;
  addProba: (proba: Proba, categoryName: string) => void;
  deleteCategory: (categoryName: string) => void;
  deleteProba: (categoryName: string, probaNume: string) => void;
};

const Category = ({
  category,
  addProba,
  deleteCategory,
  deleteProba,
}: Props) => {
  const [proba, setProba] = useState<Proba>({
    nume: "",
    serii: false,
    finala: false,
    atletiFinala: 0,
    atletiPerSerie: 0,
  });

  console.log(proba);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.type);
    if (e.target.type === "checkbox") {
      setProba((prev) => ({ ...prev, [e.target.name]: e.target.checked }));
    }
    if (e.target.type === "text" || e.target.type === "number") {
      setProba((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    }
  };
  return (
    <div className={styles.category}>
      <div className={styles.left}>
        <h3 className={styles.title}>
          <span>Categorie : {category.nume} </span>
          <FaTrashAlt
            color="red"
            className={styles.icon}
            onClick={() => deleteCategory(category.nume)}
          />
        </h3>

        <div className={styles.inputContainer}>
          <label>Adaugă o probă</label>
          <div className={styles.input}>
            <input
              type="text"
              id="proba"
              name="nume"
              onChange={changeHandler}
              value={proba.nume}
            />
            <button
              onClick={() => {
                addProba(proba, category.nume);
                setProba({
                  nume: "",
                  serii: false,
                  finala: false,
                  atletiFinala: 0,
                  atletiPerSerie: 0,
                });
              }}
            >
              Adaugă
            </button>
          </div>
          <div className={styles.control}>
            <div className={styles.checkBoxContainer}>
              <input
                type="checkbox"
                name="serii"
                onChange={changeHandler}
                checked={proba.serii}
              />
              <label>Serii</label>
            </div>
            <div className={styles.checkBoxContainer}>
              <input
                type="checkbox"
                name="finala"
                onChange={changeHandler}
                checked={proba.finala}
                min={0}
              />
              <label>Finala</label>
            </div>
          </div>
          <div className={styles.numbers}>
            {proba.serii && (
              <p>
                <label>Atleti per serie</label>
                <input
                  type="number"
                  name="atletiPerSerie"
                  value={proba.atletiPerSerie}
                  onChange={changeHandler}
                  min={0}
                />{" "}
              </p>
            )}

            {proba.finala && (
              <p>
                <label>Atleti in finala</label>
                <input
                  type="number"
                  name="atletiFinala"
                  value={proba.atletiFinala}
                  onChange={changeHandler}
                />{" "}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className={styles.right}>
        {category.probe.map((proba) => {
          return (
            <Tiket
              proba={proba}
              deleteProba={deleteProba}
              categoryName={category.nume}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Category;
