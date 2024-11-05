import { ProductShelf } from "../../molecules";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={`${styles.Home}`}>
      <ProductShelf />
    </div>
  );
};

export default Home;
