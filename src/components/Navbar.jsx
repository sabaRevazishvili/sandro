import React from "react";
import { Link } from "react-router-dom";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Heart, Handbag, Layers2, Phone } from "lucide-react";
import { Menu, X } from "lucide-react";

import MobileNavbar from "./MobileNavbar";
import { useState } from "react";
import Cart from "./Cart";

const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenCart, setIsOpenCart] = useState(false);

  return (
    <nav
      style={{ left: "50%", transform: "translateX(-50%)" }}
      className="bg-white w-full fixed top-0 flex flex-row justify-between items-center py-4 px-5 lg:px-20 border-b-2"
    >
      <button
        onClick={() => {
          setIsOpenMenu(!isOpenMenu);
        }}
        className=" md:hidden transition-transform duration-300"
        style={{ transform: isOpenMenu ? "rotate(90deg)" : "rotate(0deg)" }}
      >
        {isOpenMenu ? (
          <X className="w-6 h-6 sm:w-8 sm:h-8" />
        ) : (
          <Menu className="w-6 h-6 sm:w-8 sm:h-8" />
        )}
      </button>
      <MobileNavbar isOpen={isOpenMenu} setIsOpen={setIsOpenMenu} />
      <ul className="hidden flex-row justify-center items-center gap-7 md:flex">
        <li>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link to="/Shop">
                <Handbag className="w-8 h-8" />
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
                <Layers2 className="w-8 h-8" />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Collection</p>
            </TooltipContent>
          </Tooltip>
        </li>
      </ul>

      <Link className="text-h1 font-semibold" to="/Main">
        RUWDRESS
      </Link>
      <ul className="flex flex-row justify-center items-center gap-7">
        <li className="hidden md:flex">
          <Tooltip>
            <TooltipTrigger asChild>
              <Link to="/Contact">
                <Phone className="w-8 h-8" />
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
              <button
                onClick={() => {
                  setIsOpenCart(!isOpenCart);
                }}
                className="transition-transform duration-300"
                style={{
                  transform: isOpenCart ? "rotate(90deg)" : "rotate(0deg)",
                }}
              >
                {isOpenCart ? (
                  <X className="w-6 h-6 sm:w-8 sm:h-8" />
                ) : (
                  <Heart className="w-6 h-6 sm:w-8 sm:h-8" />
                )}
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Cart</p>
            </TooltipContent>
          </Tooltip>
        </li>
      </ul>
      <Cart isOpen={isOpenCart} setIsOpen={setIsOpenCart} />
    </nav>
  );
};

export default Navbar;
