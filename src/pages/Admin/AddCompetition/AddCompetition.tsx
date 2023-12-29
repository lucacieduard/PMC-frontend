import Header from "../../../components/PageHeader/Header";
import { Proba, Rules } from "../../../types/competitie";
import styles from "./AddCompetition.module.scss";
// import Administrative from "./Administrative";
import Categories from "./Categories";
import GeneralInfo from "./GeneralInfo";
import { useState } from "react";

type Props = {
  openSidebar: () => void;
};

const AddCompetition = ({ openSidebar }: Props) => {
  const [rules, setRules] = useState<Rules>({
    nume: "",
    locatie: "",
    startCompetitie: "",
    sfarsitCompetitie: "",
    startInscrieri: "",
    sfarsitInscrieri: "",
    categorii: [],
  });

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.type === "checkbox") {
      setRules((prev) => ({ ...prev, [e.target.name]: e.target.checked }));
    } else {
      setRules((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };
  const addCategory = (categoryName: string) => {
    setRules((prev) => {
      const categorii = prev.categorii;
      categorii.unshift({
        nume: categoryName,
        probe: [],
      });
      return { ...prev, categorii: categorii };
    });
  };

  const addProba = (proba: Proba, categoryName: string) => {
    setRules((prev) => {
      return {
        ...prev,
        categorii: prev.categorii.map((categorie) => {
          if (categorie.nume === categoryName) {
            categorie.probe.unshift(proba);
            return categorie;
          } else {
            return categorie;
          }
        }),
      };
    });
  };

  const deleteCategory = (categoryName: string) => {
    setRules((prev) => ({
      ...prev,
      categorii: prev.categorii.filter(
        (categorie) => categorie.nume !== categoryName
      ),
    }));
  };

  const deleteProba = (categoryName: string, probaNume: string) => {
    setRules((prev) => ({
      ...prev,
      categorii: prev.categorii.map((categorie) => {
        if (categorie.nume === categoryName) {
          return {
            ...categorie,
            probe: categorie.probe.filter((proba) => proba.nume !== probaNume),
          };
        } else {
          return categorie;
        }
      }),
    }));
  };

  return (
    <div className={styles.container}>
      <Header openSidebar={openSidebar} message="Adaugă competiție" />
      <main className={styles.page}>
        <GeneralInfo rules={rules} changeRules={changeHandler} />
        <Categories
          addCategory={addCategory}
          rules={rules}
          addProba={addProba}
          deleteCategory={deleteCategory}
          deleteProba={deleteProba}
        />
        {/* <Administrative changeRules={changeHandler} rules={rules} /> */}
        <button
          className={`${styles.button} button`}
          onClick={() => console.log(rules)}
        >
          Adauga Competitie
        </button>
      </main>
    </div>
  );
};

export default AddCompetition;
