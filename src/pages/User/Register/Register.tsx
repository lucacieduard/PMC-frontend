import { useContext, useState } from "react";
import styles from "./Register.module.scss";
import { useMutation } from "@tanstack/react-query";
import { signup } from "../../../utils/fetch/auth";
import { AuthContext } from "../../../context/AuthContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [form, setForm] = useState({
    nume: "",
    prenume: "",
    email: "",
    telefon: "",
    clubSportiv: "",
    parola: "",
    confirmParola: "",
  });

  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const signUpMutation = useMutation({
    mutationFn: signup,
    onSuccess: (data) => {
      authContext.setAuth(data.newUser);
      toast.success("Contul a fost creat cu succes!");
      navigate("/competitii");
    },
    onError: (error) => {
      console.log(error);
      toast.error("A aparut o eroare!");
    },
  });
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.parola !== form.confirmParola) {
      alert("Parolele nu coincid!");
      return;
    }
    signUpMutation.mutate(form);
  };
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img src="register.png" className={styles.image} />
        <form className={styles.form} onSubmit={submitHandler}>
          <h2 className={styles.title}>Creeaza un cont</h2>
          <div className={styles.fields}>
            <div className={styles.field}>
              <label>Nume</label>
              <input
                type="text"
                placeholder="Ex : Popescu"
                name="nume"
                value={form.nume}
                onChange={changeHandler}
              />
            </div>
            <div className={styles.field}>
              <label>Prenume</label>
              <input
                type="text"
                placeholder="Ex : George"
                name="prenume"
                value={form.prenume}
                onChange={changeHandler}
              />
            </div>
          </div>
          <div className={styles.single}>
            <label>Email</label>
            <input
              type="email"
              placeholder="Ex : email@gmail.com"
              name="email"
              value={form.email}
              onChange={changeHandler}
            />
          </div>
          <div className={styles.fields}>
            <div className={styles.field}>
              <label>Telefon</label>
              <input
                type="tel"
                name="telefon"
                value={form.telefon}
                onChange={changeHandler}
              />
            </div>
            <div className={styles.field}>
              <label>Club Sportiv</label>
              <input
                type="text"
                placeholder="Ex : atletIS Iasi"
                name="clubSportiv"
                value={form.clubSportiv}
                onChange={changeHandler}
              />
            </div>
          </div>
          <div className={styles.fields}>
            <div className={styles.field}>
              <label>Parola</label>
              <input
                type="password"
                name="parola"
                value={form.parola}
                onChange={changeHandler}
              />
            </div>
            <div className={styles.field}>
              <label>Confirma Parola</label>
              <input
                type="password"
                name="confirmParola"
                value={form.confirmParola}
                onChange={changeHandler}
              />
            </div>
          </div>

          <button className={`${styles.button} button`}>Creează cont</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
