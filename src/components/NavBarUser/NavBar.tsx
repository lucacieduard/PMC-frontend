import styles from "./NavBar.module.scss";
import { TiThMenu } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";

import { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [visible, setVisible] = useState(false);
  const clickHandler = () => setVisible(false);
  return (
    <div style={{ background: "#2e1f5e" }}>
      <nav className={`wrapper ${styles.navbar}`}>
        <div className={styles.logoContainer}>
          <img className={styles.logo} src="/logo_faraNume.png" />
          <h2>altetIS</h2>
        </div>

        {visible ? (
          <IoMdClose
            className={styles.hamburger}
            onClick={() => setVisible(false)}
          />
        ) : (
          <TiThMenu
            className={styles.hamburger}
            onClick={() => setVisible(true)}
          />
        )}

        {visible && (
          <ul className={styles.menu}>
            <li onClick={clickHandler}>
              <NavLink
                to={"/competitii"}
                className={({ isActive }) =>
                  isActive
                    ? `${styles.navLink} ${styles.active}`
                    : `${styles.navLink}`
                }
                end
              >
                Competiții
              </NavLink>
            </li>
            <li onClick={clickHandler}>
              <NavLink
                to={"/conectare"}
                className={({ isActive }) =>
                  isActive
                    ? `${styles.navLink} ${styles.active}`
                    : `${styles.navLink}`
                }
                end
              >
                Conectare
              </NavLink>
            </li>
            <li onClick={clickHandler}>
              <NavLink
                to={"/creeaza-cont"}
                className={({ isActive }) =>
                  isActive
                    ? `${styles.navLink} ${styles.active}`
                    : `${styles.navLink}`
                }
                end
              >
                Creează cont
              </NavLink>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
