import styles from "./AdminCompetitionNavBar.module.scss";
import { NavLink, useParams } from "react-router-dom";
const AdminCompetitionNavBar = () => {
  const { id } = useParams();
  return (
    <div className={styles.navBar}>
      <NavLink
        className={({ isActive }) => (isActive ? `${styles.active}` : ``)}
        to={`/admin/competitii/${id}`}
        end
      >
        Acasa
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? `${styles.active}` : ``)}
        to={`/admin/competitii/${id}/inscrieri`}
      >
        Inscrieri
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? `${styles.active}` : ``)}
        to={`/admin/competitii/${id}/edit-competitie`}
      >
        Editeaza Competitia
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? `${styles.active}` : ``)}
        to={`/admin/competitii/${id}/serii`}
      >
        Serii
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? `${styles.navLink} ${styles.active}` : `${styles.navLink}`
        }
        to={`/admin/competitii/${id}/tranzactii`}
      >
        Tranzactii
      </NavLink>
    </div>
  );
};

export default AdminCompetitionNavBar;
