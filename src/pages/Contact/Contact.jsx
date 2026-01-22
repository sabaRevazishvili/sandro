import React from "react";
import { Link } from "react-router-dom";
import { Facebook, AtSign, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <div className="bg-shop-now flex flex-col justify-center items-center gap-2">
      <div className="pb-5 rounded-md w-47 sm:w-60 xl:w-75 flex flex-col justify-center items-center gap-5 ">
        <h1 className="p-5 rounded-md w-full text-h1 text-center font-semibold backdrop-blur-xs bg-[rgba(255,255,255,0.46)]">
          Contact Us
        </h1>
        <div className="w-full flex gap-2 justify-between">
          <a className="rounded-md p-3 xl:p-5 bg-[rgba(255,255,255,0.46)] backdrop-blur-xs">
            <Facebook className="w-8 h-8 sm:w-10 sm:h-10" />
          </a>
          <a className="rounded-md p-3 xl:p-5 bg-[rgba(255,255,255,0.46)] backdrop-blur-xs">
            <AtSign className="w-8 h-8 sm:w-10 sm:h-10" />
          </a>
          <a className="rounded-md p-3 xl:p-5 bg-[rgba(255,255,255,0.46)] backdrop-blur-xs">
            <Instagram className="w-8 h-8 sm:w-10 sm:h-10" />
          </a>
        </div>
        <Link className="button w-full" to="/Main">
          Go Back To Main
        </Link>
      </div>
    </div>
  );
};

export default Contact;
