import styles from "./Header.module.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaArrowRight } from "react-icons/fa";

type Props = {
  openSidebar: () => void;
  message: string;
};

const Header = ({ openSidebar, message }: Props) => {
  return (
    <header className={styles.container}>
      <h1>
        <span className={styles.arrow}>
          <FaArrowRight />
        </span>
        <span className={styles.text}>{message}</span>
      </h1>
      <RxHamburgerMenu onClick={openSidebar} className={styles.hamburger} />
    </header>
  );
};

export default Header;
