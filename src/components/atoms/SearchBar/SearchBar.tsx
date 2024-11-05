import SearchIcon from "./icons/SearchIcon";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <div className={`${styles.SearchBar}`}>
      <p className={`${styles.SearchBar__placeholder}`}>
        O que está procurando?
      </p>
      <SearchIcon />
    </div>
  );
};

export default SearchBar;
