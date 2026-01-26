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
}) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        {cart ? (
          <button
            onClick={() => setItOpenCart(!isOpenCart)}
            className="transition-transform duration-300"
            style={{
              transform: isOpenCart ? "rotate(90deg)" : "rotate(0deg)",
            }}
          >
            {isOpenCart ? <X className="w-6 h-6 sm:w-8 sm:h-8" /> : icon}
          </button>
        ) : (
          <Link to={path}>{icon}</Link>
        )}
      </TooltipTrigger>
      <TooltipContent className="z-100">
        <p>{description}</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default IconButton;
