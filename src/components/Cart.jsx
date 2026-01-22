import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const Cart = ({ isOpen, setIsOpen }) => {
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent
        className="w-full max-w-full lg:max-w-1/3  "
        style={{
          top: "calc(clamp(1.5rem, 0.75rem + 2.5vw, 3.5rem) * 1.2 + 2rem + 2px)",
        }}
        side="right"
      >
        <SheetHeader className="">
          <SheetTitle>Cart</SheetTitle>
          <SheetDescription className="flex flex-col items-start px-0">
            Your Cart Is Empty
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
