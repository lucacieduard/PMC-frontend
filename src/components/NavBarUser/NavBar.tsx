import styles from "./NavBar.module.scss";
import { TiThMenu } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";

import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useMutation } from "@tanstack/react-query";
import { logout } from "../../utils/fetch/auth";
import { toast } from "react-toastify";

const NavBar = () => {
  const { setAuth } = useContext(AuthContext);
  const logoutMutation = useMutation({
    mutationFn: logout,
    onSuccess: (data) => {
      console.log(data);
      setAuth(null);
      toast.success("Te-ai deconectat cu succes!");
    },
  });
  const [visible, setVisible] = useState(false);
  const { user } = useContext(AuthContext);
  return (
    <div style={{ background: "#2e1f5e" }}>
      <nav className={`wrapper ${styles.navbar}`}>
        <div className={styles.wrapper}>
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
        </div>

        <div
          className={`${styles.menu} ${visible ? styles.show : styles.hide}`}
        >
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
          {!user ? (
            <>
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
            </>
          ) : (
            <>
              <span>
                {user.nume} {user.prenume}
              </span>{" "}
              <button onClick={() => logoutMutation.mutate()}>
                Deconectare
              </button>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
