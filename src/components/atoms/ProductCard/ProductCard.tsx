import styles from "./ProductCard.module.css";
import { formatCurrency } from "../../../utils";
import { Product } from "../../../typings/products";
import {
  useCartContext,
  useCartContextDispatch,
} from "../../../context/CartContext";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const {
    productId,
    productName,
    stars,
    imageUrl,
    listPrice,
    price,
    installments,
  } = product;

  const { productsOnCart } = useCartContext();
  const dispatch = useCartContextDispatch();

  const onClickHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    dispatch({
      type: "UPDATE_QUANTITY",
      args: {
        quantity: productsOnCart + 1,
      },
    });
  };

  return (
    <div key={`product-card-${productId}`} className={`${styles.ProductCard}`}>
      <div className={`${styles.ProductCard__imgWrapper}`}>
        <img
          src={imageUrl}
          alt={`product-card-img-${productId}`}
          className={`${styles.ProductCard__img}`}
        />
      </div>
      <div className={`${styles.ProductCard__productName}`}>{productName}</div>
      {stars && <div className={`${styles.ProductCard__stars}`}>{stars}</div>}
      {listPrice && (
        <div className={`${styles.ProductCard__listPrice}`}>
          {`de `}
          {formatCurrency(listPrice)}
        </div>
      )}
      <div className={`${styles.ProductCard__price}`}>
        {`por `}
        {formatCurrency(price)}
      </div>
      <div className={`${styles.ProductCard__installments}`}>
        {installments.map((installment) => {
          const { quantity, value } = installment;

          return (
            <>
              <div
                key={`${productId}-installment-${quantity}`}
                className={`${styles.ProductCard__installments__quantity}`}
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
      <div className={`${styles.ProductCard__buyButtonContainer}`}>
        <button
          onClick={(e) => onClickHandler(e)}
          className={`${styles.ProductCard__buyButton}`}
        >
          COMPRAR
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
