import { SearchBar, Login, Cart } from "../../atoms";
import styles from "./Header.module.css";
import Logo from "./icons/Logo";

const Header = () => {
  return (
    <header className={`${styles.Header}`}>
      <div className={`${styles.Header__container}`}>
        <div className={`${styles.Header__logo}`}>
          <Logo />
        </div>
        <div className={`${styles.Header__userActions}`}>
          <div className={`${styles.Header__searchBarContainer}`}>
            <SearchBar />
          </div>
          <div className={`${styles.Header__loginCartContainer}`}>
            <Login />
            <Cart />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
