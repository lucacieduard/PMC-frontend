import { useEffect } from "react";
import styles from "./Registrations.module.scss";

type Props = {
  changeMessage: (message: string) => void;
};

const Registractions = ({ changeMessage }: Props) => {
  useEffect(() => {
    changeMessage("Competitie - Inscrieri");
  }, []);
  return <div className={styles.container}>registrations</div>;
};

export default Registractions;
