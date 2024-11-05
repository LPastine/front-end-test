import { ProductShelf } from "../../molecules";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={`${styles.Home}`}>
      <div>Home</div>
      <ProductShelf />
    </div>
  );
};

export default Home;
