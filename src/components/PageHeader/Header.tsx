import styles from "./Header.module.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaArrowRight } from "react-icons/fa";

type Props = {
  openSidebar: () => void;
};

const Header = ({ openSidebar }: Props) => {
  return (
    <div className={styles.container}>
      <h1>
        <span className={styles.arrow}>
          <FaArrowRight />
        </span>
        <span className={styles.text}>
          Competitii - Cupa atletis junior 2024
        </span>
      </h1>
      <RxHamburgerMenu onClick={openSidebar} className={styles.hamburger} />
    </div>
  );
};

export default Header;
