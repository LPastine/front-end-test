import useDevice from "../../../hooks/useDevice";
import { SearchBar, Login, Cart } from "../../atoms";
import styles from "./Header.module.css";
import HamburgerMenu from "./icons/HamburgerMenu";
import Logo from "./icons/Logo";
import LogoMobile from "./icons/LogoMobile";

const Header = () => {
  const isMobile = useDevice();

  return (
    <header className={`${styles.Header}`}>
      <div className={`${styles.Header__container}`}>
        {isMobile ? (
          <div className={`${styles.Header__top}`}>
            <HamburgerMenu />
            <LogoMobile />
            <Cart />
          </div>
        ) : (
          <div className={`${styles.Header__logo}`}>
            <Logo />
          </div>
        )}
        <div className={`${styles.Header__userActions}`}>
          <div className={`${styles.Header__searchBarContainer}`}>
            <SearchBar />
          </div>
          {!isMobile && (
            <div className={`${styles.Header__loginCartContainer}`}>
              <Login />
              <Cart />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
