import ReactModal from "react-modal";
import styles from "./ModalMessage.module.scss";
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

type Props = {
  state: boolean;
  text: string;
  closeModal: () => void;
  action: () => void;
  type: "message" | "children";
  children?: React.ReactNode;
  buttonText: string;
};

ReactModal.setAppElement("#root");
const ModalMessage = (props: Props) => {
  return (
    <ReactModal
      isOpen={props.state}
      style={customStyles}
      // className={styles.ReactModal__Content}
    >
      <div className={styles.container}>
        <h3> {props.text}</h3>
        {props.type === "children" && props.children}
        <div style={{ textAlign: "right", marginTop: "1rem" }}>
          <button
            className="button"
            onClick={props.closeModal}
            style={{ borderRadius: "0.326rem" }}
          >
            Inchide
          </button>
          <button
            className="button"
            onClick={() => {
              props.action();
              props.closeModal();
            }}
            style={{ borderRadius: "0.326rem", marginLeft: "1rem" }}
          >
            {props.buttonText}
          </button>
        </div>
      </div>
    </ReactModal>
  );
};

export default ModalMessage;
