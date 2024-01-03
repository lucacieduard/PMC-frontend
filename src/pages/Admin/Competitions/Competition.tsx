import { Rules } from "../../../types/competitie";
import { deleteCompetition } from "../../../utils/fetch/competitions";
import styles from "./Competitions.module.scss";
import { FaRegTrashAlt } from "react-icons/fa";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import ReactModal from "react-modal";
import { toast } from "react-toastify";
import ModalMessage from "../../../components/Modal/ModalMessage";

ReactModal.setAppElement("#root");

const Competition = ({ competition }: { competition: Rules }) => {
  const [modal, setModal] = useState(false);
  const queryClient = useQueryClient();
  const handlerDelete = async () => {
    await deleteCompetition(competition._id);
    queryClient.invalidateQueries({
      queryKey: ["competitions"],
    });
    toast.success("Competitie stearsa cu succes!");
  };

  return (
    <div className={styles.competition}>
      <div className={styles.header}>
        <h2 className={styles.compTitle}>{competition.nume}</h2>
        <span onClick={() => setModal(true)}>
          <FaRegTrashAlt />
        </span>
      </div>

      <p className={styles.period}>
        Competitie:{" "}
        {competition.startCompetitie.split("T")[0].replaceAll("-", ".")} -{" "}
        {competition.sfarsitCompetitie.split("T")[0].replaceAll("-", ".")}
      </p>
      <img
        src={`${import.meta.env.VITE_API_URL}/img/banners/${
          competition.banner
        }`}
        className={styles.banner}
        alt="competition banner"
      />
      <button className={`button ${styles.button}`}>
        Acceseaza competitia
      </button>
      <ModalMessage
        state={modal}
        action={handlerDelete}
        text={"Esti sigur ca doresti sa stergi aceasta competitie?"}
        closeModal={() => setModal(false)}
      />
    </div>
  );
};

export default Competition;
