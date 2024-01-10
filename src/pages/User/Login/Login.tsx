import { useContext, useState } from "react";
import styles from "./Login.module.scss";
import { AuthContext } from "../../../context/AuthContext";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../../utils/fetch/auth";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AuthComponent from "../../../components/Login/AuthComponent";

const Login = () => {
  const [form, setForm] = useState({ email: "", parola: "" });
  const authContext = useContext(AuthContext);

  const navigate = useNavigate();
  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      authContext.setAuth(data.user);
      navigate("/competitii");
      toast.success("Te-ai conectat cu succes!");
    },
    onError: (error) => {
      console.log(error.message);
      toast.error("Email sau parola incorecta!");
    },
  });
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginMutation.mutate(form);
  };
  return (
    <AuthComponent>
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
        <button
          className={`${styles.button} button`}
          disabled={!!authContext.user || loginMutation.isPending}
        >
          Conectare
        </button>
        {!!authContext.user && (
          <span style={{ color: "red" }}>Deja esti conectat!</span>
        )}
        <p className={styles.forgot}>
          Ti-ai uitat parola? O poti reseta{" "}
          <NavLink to={"/parola-uitata"}>aici</NavLink>
        </p>
      </form>
    </AuthComponent>
  );
};

export default Login;
