import React from "react";
import { Link } from "react-router-dom";
import { Facebook, AtSign, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <div className="bg-shop-now flex flex-col justify-center items-center gap-2">
      <div className="p-5 rounded-md w-44 sm:w-60 sm:gap-8 xl:w-75 flex flex-col justify-center items-center gap-5 backdrop-blur-xs bg-[rgba(255,255,255,0.46)]">
        <h1 className="text-h1 text-center font-semibold">Contact Us</h1>
        <div className="w-full flex gap-2 justify-between">
          <a>
            <Facebook className="w-8 h-8 sm:w-10 sm:h-10" />
          </a>
          <a>
            <AtSign className="w-8 h-8 sm:w-10 sm:h-10" />
          </a>
          <a>
            <Instagram className="w-8 h-8 sm:w-10 sm:h-10" />
          </a>
        </div>
      </div>
      <Link className="button sm:w-60 xl:w-75" to="/Main">
        Go Back To Main
      </Link>
    </div>
  );
};

export default Contact;
