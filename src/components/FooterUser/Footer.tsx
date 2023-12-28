import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";
const Footer = () => {
  return (
    <footer style={{ background: "#2e1f5e" }}>
      <div className={`${styles.footer} wrapper`}>
        <img
          className={styles.logo}
          alt="atletis logo"
          src="/logo_faraNume.png"
        />

        <a
          href="https://eduardlucaci.ro/"
          target="_blank"
          className={styles.by}
        >
          &#169; Lucaci Eduard
        </a>

        <Link to={"/admin"} className={styles.admin}>
          Administrare{" "}
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
