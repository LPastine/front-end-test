import { useCartContext } from "../../../context/CartContext";
import styles from "./Cart.module.css";
import CartIcon from "./icons/CartIcon";

const Cart = () => {
  const { productsOnCart } = useCartContext();

  return (
    <div className={`${styles.Cart}`}>
      <CartIcon />
      <div className={`${styles.Cart__quantity}`}>{productsOnCart}</div>
    </div>
  );
};

export default Cart;
