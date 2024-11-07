import { useProducts } from "../../../hooks/useProducts";
import { Skeleton } from "../../atoms";
import Carousel from "../Carousel";
import styles from "./ProductShelf.module.css";

const ProductShelf = () => {
  const { products, error, loading } = useProducts();

  if (error) return null;

  return (
    <section id="product-shelf" className={styles.ProductShelf}>
      <h1 className={styles.ProductShelf__title}>Mais Vendidos</h1>
      <div className={styles.ProductShelf__wrapper}>
        {loading || !products?.length ? (
          <Skeleton />
        ) : (
          products && <Carousel products={products} />
        )}
      </div>
    </section>
  );
};

export default ProductShelf;
