import { useProducts } from "../../../hooks/useProducts";
import styles from "./ProductShelf.module.css";
import { formatCurrency } from "../../../utils";

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
          <div
            key={`product-card-${productId}`}
            className={`${styles.ProductShelf__card}`}
          >
            <div className={`${styles.ProductShelf__card__imgWrapper}`}>
              <img
                src={imageUrl}
                alt={`product-card-img-${productId}`}
                className={`${styles.ProductShelf__card__img}`}
              />
            </div>
            <div className={`${styles.ProductShelf__card__productName}`}>
              {productName}
            </div>
            {stars && (
              <div className={`${styles.ProductShelf__card__stars}`}>
                {stars}
              </div>
            )}
            {listPrice && (
              <div className={`${styles.ProductShelf__card__listPrice}`}>
                {`de `}
                {formatCurrency(listPrice)}
              </div>
            )}
            <div className={`${styles.ProductShelf__card__price}`}>
              {`por `}
              {formatCurrency(price)}
            </div>
            <div className={`${styles.ProductShelf__card__installments}`}>
              {installments.map((installment) => {
                const { quantity, value } = installment;

                return (
                  <>
                    <div
                      key={`${productId}-installment-${quantity}`}
                      className={`${styles.ProductShelf__card__installments__quantity}`}
                    >
                      {`ou em `}
                      {quantity}
                      {`x`}
                      {` de `}
                      {formatCurrency(value)}
                    </div>
                  </>
                );
              })}
            </div>
            <div className={`${styles.ProductShelf__card__buyButtonContainer}`}>
              <button className={`${styles.ProductShelf__card__buyButton}`}>
                COMPRAR
              </button>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default ProductShelf;
