import React from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

const IconButton = ({
  path,
  icon,
  description,
  cart,
  isOpenCart,
  setItOpenCart,
  cartCount,
}) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        {cart ? (
          <button
            onClick={() => setItOpenCart(!isOpenCart)}
            className="transition-transform duration-300 relative"
            style={{
              transform: isOpenCart ? "rotate(90deg)" : "rotate(0deg)",
            }}
          >
            {isOpenCart ? <X className="w-6 h-6 sm:w-8 sm:h-8" /> : icon}
            <span
              style={{
                display: isOpenCart ? "none" : "block",
              }}
              className="text-xs font-bold  absolute -top-2 -right-2 text-black border bg-white  border-black rounded-full w-4  h-4 flex justify-center items-center"
            >
              {cartCount}
            </span>
          </button>
        ) : (
          <Link to={path}>{icon}</Link>
        )}
      </TooltipTrigger>
      <TooltipContent className="hidden md:flex z-100">
        <p>{description}</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default IconButton;
