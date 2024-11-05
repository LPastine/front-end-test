import { useCartContext } from "../../../context/CartContext";
import styles from "./Cart.module.css";
import CartIcon from "./icons/CartIcon";

const Cart = () => {
  const { productsOnCart } = useCartContext();

  return (
    <div className={`${styles.Cart}`}>
      <div className={`${styles.Cart__icon}`}>
        <CartIcon />
      </div>
      <div className={`${styles.Cart__quantityContainer}`}>
        {productsOnCart > 0 && (
          <div className={`${styles.Cart__quantity}`}>{productsOnCart}</div>
        )}
      </div>
    </div>
  );
};

export default Cart;
