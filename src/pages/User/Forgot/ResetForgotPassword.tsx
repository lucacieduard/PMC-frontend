import { NavLink, useParams } from "react-router-dom";
import AuthComponent from "../../../components/Login/AuthComponent";
import styles from "./Forgot.module.scss";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { resetPassword } from "../../../utils/fetch/auth";

const ResetForgotPassword = () => {
  const { token } = useParams();
  const [form, setForm] = useState({
    parola: "",
    confirmParola: "",
  });
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const resetMutation = useMutation({
    mutationFn: resetPassword,
    onSuccess: (data) => {
      console.log("success");
      console.log(data);
    },
    onError: (error) => {
      console.log("error");
      console.log(error);
    },
  });
  if (!token) return <p>Pagina nu exista</p>;

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.parola !== form.confirmParola) {
      return alert("Parolele nu coincid");
    }
    if (form.parola.length < 8) {
      return alert("Parolele trebuie sa aiba minim 8 caractere");
    }

    console.log(token, form.parola);
    resetMutation.mutate({ token, parola: form.parola });
  };
  return (
    <AuthComponent>
      <form className={styles.form} onSubmit={submitHandler}>
        <h2 className={styles.title}>Seteaza o noua parola!</h2>
        {resetMutation.isError && (
          <span style={{ color: "red", fontSize: "0.9rem" }}>
            {resetMutation.error.message}{" "}
            <NavLink to="/parola-uitata">Reincearca</NavLink>
          </span>
        )}

        {resetMutation.isSuccess && (
          <span style={{ color: "green", fontSize: "0.9rem" }}>
            <p>Parola a fost resetata cu succes!</p>
            <NavLink to="/conectare">Conecteaza-te</NavLink>
          </span>
        )}
        <div className={styles.field}>
          <label>Introdu parola noua</label>
          <input
            type="password"
            name="parola"
            value={form.parola}
            onChange={changeHandler}
          />
        </div>
        <div className={styles.field}>
          <label>Confirma parola noua</label>
          <input
            type="password"
            name="confirmParola"
            value={form.confirmParola}
            onChange={changeHandler}
          />
        </div>
        <button className={`${styles.button} button`}>Trimite</button>
      </form>
    </AuthComponent>
  );
};

export default ResetForgotPassword;
