import React from "react";
// import { routes } from "../constants/routes";
import { Link } from "react-router-dom";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Shirt, LayoutGrid, MessageCircle, ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between items-center py-4 px-20 border-b-2">
      <ul className="flex flex-row justify-center items-center gap-7">
        <li>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link to="/Shop">
                <Shirt size={34} />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Shop</p>
            </TooltipContent>
          </Tooltip>
        </li>
        <li>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link to="/Collection">
                <LayoutGrid size={34} />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Collection</p>
            </TooltipContent>
          </Tooltip>
        </li>
      </ul>
      <Link className="text-5xl font-semibold" to="/Main">
        RUWDRESS
      </Link>
      <ul className="flex flex-row justify-center items-center gap-7">
        <li>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link to="/Contact">
                <MessageCircle size={34} />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>contact</p>
            </TooltipContent>
          </Tooltip>
        </li>
        <li>
          <Tooltip>
            <TooltipTrigger asChild>
              <ShoppingCart size={34} />
            </TooltipTrigger>
            <TooltipContent>
              <p>Cart</p>
            </TooltipContent>
          </Tooltip>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
