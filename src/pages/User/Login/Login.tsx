import styles from "./Login.module.scss";

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img src="login.png" className={styles.image} />
        <form className={styles.form}>
          <h2 className={styles.title}>Conectare</h2>
          <div className={styles.field}>
            <label>Email</label>
            <input type="email" />
          </div>
          <div className={styles.field}>
            <label>Parola</label>
            <input type="password" />
          </div>
          <button className={`${styles.button} button`}>Conectare</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
