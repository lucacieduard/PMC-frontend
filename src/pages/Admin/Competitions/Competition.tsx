import { Rules } from "../../../types/competitie";
import { deleteCompetition } from "../../../utils/fetch/competitions";
import styles from "./Competitions.module.scss";
import { FaRegTrashAlt } from "react-icons/fa";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import ReactModal from "react-modal";
import { toast } from "react-toastify";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
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
      <ReactModal
        isOpen={modal}
        style={customStyles}
        // className={styles.ReactModal__Content}
      >
        <h3> Esti sigur ca doresti sa stergi competitia ?</h3>
        <p style={{ textAlign: "center", color: "red" }}>{competition.nume}</p>
        <div style={{ textAlign: "right", marginTop: "1rem" }}>
          <button
            className="button"
            onClick={() => setModal(false)}
            style={{ borderRadius: "0.326rem" }}
          >
            Inchide
          </button>
          <button
            className="button"
            onClick={() => {
              handlerDelete();
              setModal(false);
            }}
            style={{ borderRadius: "0.326rem", marginLeft: "1rem" }}
          >
            Sterge
          </button>
        </div>
      </ReactModal>
    </div>
  );
};

export default Competition;
