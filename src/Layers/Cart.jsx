import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useCart } from "@/context/useCart";
import CartCard from "../components/CartCard";
import { clearCartAction } from "@/context/actionCreator";

const Cart = ({ isOpen, setIsOpen }) => {
  const { state, dispatch } = useCart();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent
        style={{
          top: "calc(clamp(1.5rem, 0.75rem + 2.5vw, 3.5rem) * 1.2 + 2rem + 2px)",
          // paddingBottom:
          //   "calc(clamp(1.5rem, 0.75rem + 2.5vw, 3.5rem) * 1.2 + 2rem + 2px)",
          height:
            "calc(100vh - (clamp(1.5rem, 0.75rem + 2.5vw, 3.5rem) * 1.2 + 2rem + 2px))",
        }}
        side="right"
      >
        <SheetHeader>
          <SheetTitle>Cart</SheetTitle>
          <VisuallyHidden>
            <SheetDescription className="flex flex-col items-start px-0">
              Your Cart Is Empty
            </SheetDescription>
          </VisuallyHidden>
        </SheetHeader>
        <div className="flex-1 overflow-y-auto mt-8 pr-0">
          <div className="flex flex-col gap-4 p-0">
            {state.cart.length === 0 ? (
              <p className="text-center text-gray-500">No items yet</p>
            ) : (
              <>
                {state.cart.map((item) => (
                  <CartCard key={item.id} item={item} />
                ))}
                <button
                  onClick={() => dispatch(clearCartAction())}
                  className="button"
                >
                  Clear Cart
                </button>
                <p>total:</p>
                <span>
                  {state.cart.reduce(
                    (total, item) => total + item.price * item.quantity,
                    0,
                  )}
                  GEL
                </span>
              </>
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
