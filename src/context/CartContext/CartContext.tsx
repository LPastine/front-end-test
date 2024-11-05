import { createContext, useContext, useReducer } from "react";

import type { ICartContext } from "./typings/CartContext";

const CartContext = createContext<ICartContext | undefined>(undefined);

const CartContextDispatch = createContext<Dispatch | undefined>(undefined);

type Dispatch = (action: Action) => void;

type UpdateQuantity = {
  type: "UPDATE_QUANTITY";
  args: {
    quantity: number;
  };
};

type Action = UpdateQuantity;

function reducer(state: ICartContext, action: Action): ICartContext {
  switch (action.type) {
    case "UPDATE_QUANTITY": {
      return {
        ...state,
        productsOnCart: action.args.quantity,
      };
    }

    default:
      return state;
  }
}

const CartProvider = ({ children }: any) => {
  const initialState: ICartContext = {
    productsOnCart: 0,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={state}>
      <CartContextDispatch.Provider value={dispatch}>
        {children}
      </CartContextDispatch.Provider>
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error(
      "useCartContext has to be used within <CartContext.Provider>"
    );
  }

  return cartContext;
};

const useCartContextDispatch = () => {
  const cartContextDispatch = useContext(CartContextDispatch);

  if (!cartContextDispatch) {
    throw new Error(
      "useCartContextDispatch has to be used within <CartContextDispatch.Provider>"
    );
  }

  return cartContextDispatch;
};

export {
  CartContext,
  useCartContext,
  CartContextDispatch,
  useCartContextDispatch,
  CartProvider,
};
