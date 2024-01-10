import styles from "./AuthComponent.module.scss";
type Props = {
  children: React.ReactNode;
};
const AuthComponent = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img src="/login.png" className={styles.image} />
        {children}
      </div>
    </div>
  );
};

export default AuthComponent;
