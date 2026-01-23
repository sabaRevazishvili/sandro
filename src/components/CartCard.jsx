import React from "react";
import { useCart } from "@/context/useCart";
import {
  addToCartAction,
  decreaseQuantityAction,
  removeFromCartAction,
} from "@/context/actionCreator";
import { Plus, Minus } from "lucide-react";

const CartCard = ({ item }) => {
  // eslint-disable-next-line no-unused-vars
  const { state, dispatch } = useCart();

  return (
    <div className="overflow-hidden flex flex-row items-center  gap-6 rounded-xl border shadow-sm justify-start ">
      <img src={item.image} className="h-40" />
      <div className=" flex flex-col justify-center items-start">
        <h3 className="font-semibold text-lg text-center">{item.title}</h3>
        <p className="text-gray-600 text-center">{item.price} GEL</p>
        <div className="flex flex-row gap-4">
          <p>quantity:</p>
          <button onClick={() => dispatch(addToCartAction(item))}>
            <Plus />
          </button>
          <p>{item.quantity}</p>
          <button onClick={() => dispatch(decreaseQuantityAction(item.id))}>
            <Minus />
          </button>
        </div>

        <button onClick={() => dispatch(removeFromCartAction(item.id))}>
          remove
        </button>
      </div>
    </div>
  );
};

export default CartCard;
