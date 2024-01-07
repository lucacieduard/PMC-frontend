import { Link, NavLink } from "react-router-dom";
import styles from "./Sidebar.module.scss";
import { IoMdClose } from "react-icons/io";
// import { FaRegUser } from "react-icons/fa";

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
      <div className={styles.navigationHeader}>
        <img
          src="/logo_faraNume.png"
          alt="atletis logo"
          width="70px"
          className={styles.logo}
        />
        <h2>atletIS admin</h2>
      </div>

      <nav className={styles.navigation}>
        <div className={styles.part}>
          <p className={styles.title}>General</p>
          <NavLink
            to="/admin/competitii"
            className={({ isActive }) =>
              isActive
                ? `${styles.navLink} ${styles.active}`
                : `${styles.navLink}`
            }
            end
          >
            Competitii
          </NavLink>
          <NavLink
            to="/admin/utilizatori"
            className={({ isActive }) =>
              isActive
                ? `${styles.navLink} ${styles.active}`
                : `${styles.navLink}`
            }
            end
          >
            Utilizatori
          </NavLink>
          <NavLink
            to="/admin/adauga"
            className={({ isActive }) =>
              isActive
                ? `${styles.navLink} ${styles.active}`
                : `${styles.navLink}`
            }
          >
            Adauga competitie
          </NavLink>
        </div>
        <div className={styles.part}>
          <p className={styles.title}>Competitie</p>
          <div className={styles.links}>
            <NavLink
              to="/admin/competitii/1"
              className={({ isActive }) =>
                isActive
                  ? `${styles.navLink} ${styles.active}`
                  : `${styles.navLink}`
              }
            >
              Acasa
            </NavLink>
          </div>
        </div>
      </nav>

      <div className={styles.footer}>
        {/* <FaRegUser />
        <span>Administrator</span> */}
        <Link to={"/competitii"} style={{ color: "white" }}>
          User APP
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
