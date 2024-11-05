import LoginIcon from "./icons/LoginIcon";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={`${styles.Login}`}>
      <LoginIcon />
      <p className={`${styles.Login__label}`}>Minha Conta</p>
    </div>
  );
};

export default Login;
