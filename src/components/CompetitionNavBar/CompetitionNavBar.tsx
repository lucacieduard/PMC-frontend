import { NavLink } from "react-router-dom";
import styles from "./CompetitionNavBar.module.scss";
const CompetitionNavBar = () => {
  return (
    <div className={`${styles.navigation}`}>
      <NavLink
        to={""}
        className={({ isActive }) =>
          isActive ? `${styles.navLink} ${styles.active}` : `${styles.navLink}`
        }
        end
      >
        Informatii
      </NavLink>
      <NavLink
        to={"inscriere"}
        className={({ isActive }) =>
          isActive ? `${styles.navLink} ${styles.active}` : `${styles.navLink}`
        }
        end
      >
        Inscriere
      </NavLink>
      <NavLink
        to={"program"}
        className={({ isActive }) =>
          isActive ? `${styles.navLink} ${styles.active}` : `${styles.navLink}`
        }
        end
      >
        Program
      </NavLink>
      <NavLink
        to={"serii"}
        className={({ isActive }) =>
          isActive ? `${styles.navLink} ${styles.active}` : `${styles.navLink}`
        }
        end
      >
        Serii
      </NavLink>
      <NavLink
        to={"rezultate"}
        className={({ isActive }) =>
          isActive ? `${styles.navLink} ${styles.active}` : `${styles.navLink}`
        }
        end
      >
        Rezultate
      </NavLink>
    </div>
  );
};

export default CompetitionNavBar;
