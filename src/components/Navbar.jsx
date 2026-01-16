import React from "react";
// import { routes } from "../constants/routes";
import { Link } from "react-router-dom";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Shirt, LayoutGrid, MessageCircle, ShoppingCart } from "lucide-react";
import { Menu, X } from "lucide-react";

import MobileNavbar from "./MobileNavbar";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex flex-row justify-between items-center py-4 px-5 lg:px-20 border-b-2">
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className=" md:hidden transition-transform duration-300"
        style={{ transform: isOpen ? "rotate(90deg)" : "rotate(0deg)" }}
      >
        {isOpen ? <X size={34} /> : <Menu size={34} />}
      </button>
      <MobileNavbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <ul className="hidden flex-row justify-center items-center gap-7 md:flex">
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

      <Link
        className="text-xl text-h1 font-semibold lg:text-5xl"
        to="/Main"
      >
        RUWDRESS
      </Link>
      <ul className="flex flex-row justify-center items-center gap-7">
        <li className="hidden md:flex">
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
