import styles from "./Register.module.scss";
const Register = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img src="register.png" className={styles.image} />
        <form className={styles.form}>
          <h2 className={styles.title}>Creeaza un cont</h2>
          <div className={styles.fields}>
            <div className={styles.field}>
              <label>Nume</label>
              <input type="text" placeholder="Ex : Popescu" />
            </div>
            <div className={styles.field}>
              <label>Prenume</label>
              <input type="text" placeholder="Ex : George" />
            </div>
          </div>
          <div className={styles.single}>
            <label>Email</label>
            <input type="email" placeholder="Ex : email@gmail.com" />
          </div>
          <div className={styles.fields}>
            <div className={styles.field}>
              <label>Telefon</label>
              <input type="tel" />
            </div>
            <div className={styles.field}>
              <label>Club Sportiv</label>
              <input type="text" placeholder="Ex : atletIS Iasi" />
            </div>
          </div>
          <div className={styles.fields}>
            <div className={styles.field}>
              <label>Parola</label>
              <input type="password" />
            </div>
            <div className={styles.field}>
              <label>Confirma Parola</label>
              <input type="password" />
            </div>
          </div>

          <button className={`${styles.button} button`}>Creează cont</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
