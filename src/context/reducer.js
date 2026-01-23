import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  DECREASE_QUANTITY,
} from "./actions";

const initialState = {
  cart: [],
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TO_CART: {
      const existingItem = state.cart.find(
        (cartItem) => cartItem.id === payload.id,
      );

      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map((cartItem) =>
            cartItem.id === payload.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem,
          ),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...payload, quantity: 1 }],
        };
      }
    }
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((cartItem) => cartItem.id !== payload),
      };
    case DECREASE_QUANTITY: {
      const item = state.cart.find((cartItem) => cartItem.id === payload);
      if (item && item.quantity === 1) {
        // If quantity is 1, remove the item
        return {
          ...state,
          cart: state.cart.filter((cartItem) => cartItem.id !== payload),
        };
      } else {
        // Otherwise, decrease quantity
        return {
          ...state,
          cart: state.cart.map((cartItem) =>
            cartItem.id === payload
              ? { ...cartItem, quantity: cartItem.quantity - 1 }
              : cartItem,
          ),
        };
      }
    }
    case CLEAR_CART:
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};

export { reducer, initialState };
