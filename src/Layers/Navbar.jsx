import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, Handbag, Layers2, Phone, Menu, X } from "lucide-react";

import MobileNavbar from "./MobileNavbar";
import Cart from "./Cart";
import IconButton from "../components/IconButton";

const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenCart, setIsOpenCart] = useState(false);

  return (
    <nav className="bg-white w-full fixed top-0 flex flex-row justify-between items-center py-4 px-5 lg:px-20 border-b-2 left-1/2 -translate-x-1/2 z-100">
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
      <ul className="hidden flex-row justify-center items-center gap-7 md:flex">
        <li>
          <IconButton
            path="/shop"
            icon={<Handbag className="w-8 h-8" />}
            description={"shop"}
          />
        </li>
        <li>
          <IconButton
            path="/Collection"
            icon={<Layers2 className="w-8 h-8" />}
            description={"Collection"}
          />
        </li>
      </ul>
      <Link className="text-h1 font-semibold" to="/Main">
        RUWDRESS
      </Link>
      <ul className="flex flex-row justify-center items-center gap-7">
        <li className="hidden md:flex">
          <IconButton
            path="/Contact"
            icon={<Phone className="w-8 h-8" />}
            description={"Contact"}
          />
        </li>
        <li>
          <IconButton
            path="/Cart"
            icon={<Heart className="w-6 h-6 sm:w-8 sm:h-8" />}
            description={"Cart"}
            cart={true}
            isOpenCart={isOpenCart}
            setItOpenCart={setIsOpenCart}
          />
        </li>
      </ul>
      <MobileNavbar isOpen={isOpenMenu} setIsOpen={setIsOpenMenu} />
      <Cart isOpen={isOpenCart} setIsOpen={setIsOpenCart} />
    </nav>
  );
};

export default Navbar;
