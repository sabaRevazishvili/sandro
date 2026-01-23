import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  DECREASE_QUANTITY,
} from "./actions";

const addToCartAction = (item) => {
  return {
    type: ADD_TO_CART,
    payload: item,
  };
};
const removeFromCartAction = (id) => {
  return {
    type: REMOVE_FROM_CART,
    payload: id,
  };
};
const clearCartAction = () => {
  return {
    type: CLEAR_CART,
  };
};

const decreaseQuantityAction = (id) => {
  return {
    type: DECREASE_QUANTITY,
    payload: id,
  };
};

export {
  addToCartAction,
  removeFromCartAction,
  clearCartAction,
  decreaseQuantityAction,
};
