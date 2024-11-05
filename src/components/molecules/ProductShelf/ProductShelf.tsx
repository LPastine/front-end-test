import { useProducts } from "../../../hooks/useProducts";
import styles from "./ProductShelf.module.css";

const ProductShelf = () => {
  const { products, error, loading } = useProducts();

  if (error || loading || !products) return null;

  return (
    <section id="product-shelf" className={`${styles.ProductShelf}`}>
      <h1 className={`${styles.ProductShelf__title}`}>Mais Vendidos</h1>
      {products.map((product) => {
        const {
          productId,
          productName,
          stars,
          imageUrl,
          listPrice,
          price,
          installments,
        } = product;

        return (
          <div className={`${styles.ProductShelf__card}`}>
            <div className={`${styles.ProductShelf__card__productId}`}>
              {productId}
            </div>
            <div className={`${styles.ProductShelf__card__productName}`}>
              {productName}
            </div>
            <div className={`${styles.ProductShelf__card__stars}`}>{stars}</div>
            <div className={`${styles.ProductShelf__card__img}`}>
              {imageUrl}
            </div>
            <div className={`${styles.ProductShelf__card__listPrice}`}>
              {listPrice}
            </div>
            <div className={`${styles.ProductShelf__card__price}`}>{price}</div>
            <div className={`${styles.ProductShelf__card__installments}`}>
              {installments.map((installment) => {
                const { quantity, value } = installment;

                return (
                  <>
                    <div
                      className={`${styles.ProductShelf__card__installments__quantity}`}
                    >
                      {quantity}
                    </div>
                    <div
                      className={`${styles.ProductShelf__card__installments__value}`}
                    >
                      {value}
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default ProductShelf;
