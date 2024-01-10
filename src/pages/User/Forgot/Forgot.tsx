import { useMutation } from "@tanstack/react-query";
import styles from "./Forgot.module.scss";
import { forgotPassword } from "../../../utils/fetch/auth";
import { useState } from "react";
import AuthComponent from "../../../components/Login/AuthComponent";

const Forgot = () => {
  const [email, setEmail] = useState("");
  const forgotMutation = useMutation({
    mutationFn: forgotPassword,
  });

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    forgotMutation.mutate(email);
  };

  return (
    <AuthComponent>
      <form className={styles.form} onSubmit={submitHandler}>
        <h2 className={styles.title}>Ai uitat parola?</h2>
        {forgotMutation.isError && (
          <span style={{ color: "red", fontSize: "0.9rem" }}>
            {forgotMutation.error.message}
          </span>
        )}
        {forgotMutation.isSuccess && (
          <span style={{ color: "green", fontSize: "0.9rem" }}>
            {forgotMutation.data.message}
          </span>
        )}
        <div className={styles.field}>
          <label>Introdu email-ul contului</label>
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <button
          className={`${styles.button} button`}
          disabled={forgotMutation.isPending}
        >
          Trimite
        </button>
      </form>
    </AuthComponent>
  );
};

export default Forgot;
