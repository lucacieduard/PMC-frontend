import { useEffect } from "react";
import styles from "./Tranzactions.module.scss";

type Props = {
  changeMessage: (message: string) => void;
};

const Tranzactions = ({ changeMessage }: Props) => {
  useEffect(() => {
    changeMessage("Competitie - Tranzactii");
  }, []);
  return <div className={styles.container}>tranzactii</div>;
};

export default Tranzactions;
