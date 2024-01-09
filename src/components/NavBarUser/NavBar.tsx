import styles from "./NavBar.module.scss";
import { TiThMenu } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useMutation } from "@tanstack/react-query";
import { logout } from "../../utils/fetch/auth";
import { toast } from "react-toastify";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { IconButton } from "@mui/material";

const NavBar = () => {
  const { setAuth, user } = useContext(AuthContext);
  const [visible, setVisible] = useState(false);
  const [show, setShow] = useState(false);

  const logoutMutation = useMutation({
    mutationFn: logout,
    onSuccess: (data) => {
      console.log(data);
      setAuth(null);
      toast.success("Te-ai deconectat cu succes!");
    },
  });
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
            <div
              className={styles.user}
              onMouseEnter={() => setShow(true)}
              onMouseLeave={() => setShow(false)}
            >
              <IconButton className={styles.icon}>
                <AccountCircleIcon style={{ color: "white" }} />
                <ArrowDropDownIcon
                  style={{ color: "white" }}
                  className={styles.icon}
                />
              </IconButton>
              <div
                className={
                  show
                    ? `${styles.showL} ${styles.subNav}`
                    : `${styles.hideL} ${styles.subNav}`
                }
              >
                <p className={styles.name}>
                  Bună {user.nume} {user.prenume} !
                </p>
                <button
                  className={`${styles.logout} button`}
                  onClick={() => {
                    logoutMutation.mutate();
                    setShow(false);
                  }}
                >
                  Deconectare
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
