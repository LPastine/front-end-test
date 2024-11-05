import { useProducts } from "../../../hooks/useProducts";
import styles from "./ProductShelf.module.css";
import ProductCard from "../../atoms/ProductCard";

const ProductShelf = () => {
  const { products, error, loading } = useProducts();

  if (error || loading || !products) return null;

  return (
    <section id="product-shelf" className={`${styles.ProductShelf}`}>
      <h1 className={`${styles.ProductShelf__title}`}>Mais Vendidos</h1>
      {products.map((product) => {
        return <ProductCard product={product} />;
      })}
    </section>
  );
};

export default ProductShelf;
