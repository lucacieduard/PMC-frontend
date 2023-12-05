import { useNavigate } from "react-router-dom";
import styles from "./Login.module.scss";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h1 className={styles.title}>AtletIS Admin</h1>
        <div className={styles.inputContainer}>
          <label className={styles.label}>User</label>
          <input type="text" className={styles.input} />
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.label}>Parola</label>
          <input type="password" className={styles.input} />
        </div>
        <button onClick={() => navigate("/admin/competitii")}>Conectare</button>
        <img src="logo.png" alt="logo" />
      </div>
    </div>
  );
};

export default Login;
