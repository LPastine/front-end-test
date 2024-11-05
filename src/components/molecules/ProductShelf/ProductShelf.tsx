import { useProducts } from "../../../hooks/useProducts";
import Carousel from "../Carousel";
import styles from "./ProductShelf.module.css";

const ProductShelf = () => {
  const { products, error, loading } = useProducts();

  if (error || loading || !products) return null;

  return (
    <section id="product-shelf" className={styles.ProductShelf}>
      <h1 className={styles.ProductShelf__title}>Mais Vendidos</h1>
      <Carousel products={products} />
    </section>
  );
};

export default ProductShelf;
