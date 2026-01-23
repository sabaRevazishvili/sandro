import React, { useReducer } from "react";
import { CartContext } from "./CartContext";
import { initialState, reducer } from "./reducer";

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
