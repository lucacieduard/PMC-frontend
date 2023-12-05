import styles from "./Sidebar.module.scss";
import { IoMdClose } from "react-icons/io";

type Props = {
  changeVisible: () => void;
  visibility: boolean;
};
const Sidebar = (props: Props) => {
  return (
    <div
      className={`${styles.container} ${
        props.visibility ? styles.visible : styles.hide
      }`}
    >
      <IoMdClose
        color="white"
        onClick={props.changeVisible}
        className={styles.close}
      />
    </div>
  );
};

export default Sidebar;
