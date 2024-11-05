import { ProductShelf, Newsletter } from "../../molecules";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={`${styles.Home}`}>
      <ProductShelf />
      <Newsletter />
    </div>
  );
};

export default Home;
