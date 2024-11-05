import { SearchBar, Login, Cart } from "../../atoms";
import styles from "./Header.module.css";
import Logo from "./icons/Logo";

const Header = () => {
  return (
    <div className={`${styles.Header}`}>
      <Logo />
      <SearchBar />
      <Login />
      <Cart />
    </div>
  );
};

export default Header;
