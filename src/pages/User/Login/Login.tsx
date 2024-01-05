import { useState } from "react";
import styles from "./Login.module.scss";

const Login = () => {
  const [form, setForm] = useState({ email: "", parola: "" });
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/utilizatori/autentificare`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
        credentials: "include",
      }
    );
    const data = await response.json();
    console.log(response);
    console.log(data);
  };
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img src="login.png" className={styles.image} />
        <form className={styles.form} onSubmit={submitHandler}>
          <h2 className={styles.title}>Conectare</h2>
          <div>
            <div className={styles.field}>
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={changeHandler}
              />
            </div>
            <div className={styles.field}>
              <label>Parola</label>
              <input
                type="password"
                name="parola"
                value={form.parola}
                onChange={changeHandler}
              />
            </div>
          </div>
          <button className={`${styles.button} button`}>Conectare</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
