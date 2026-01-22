import React from "react";
import { Link } from "react-router-dom";
import { Facebook, AtSign, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <div className="bg-shop-now flex flex-col justify-center items-center">
      <div className="pb-5 rounded-md w-47 sm:w-60 sm:gap-5 xl:w-75 flex flex-col justify-center items-center gap-3 ">
        <div className="w-full flex justify-between">
          <a className="rounded-md p-3 xl:p-5 bg-[rgba(255,255,255,0.46)] backdrop-blur-xs">
            <Facebook strokeWidth="1.5px" className="w-8 h-8 sm:w-10 sm:h-10" />
          </a>
          <a className="rounded-md p-3 xl:p-5 bg-[rgba(255,255,255,0.46)] backdrop-blur-xs">
            <AtSign strokeWidth="1.5px" className="w-8 h-8 sm:w-10 sm:h-10" />
          </a>
          <a className="rounded-md p-3 xl:p-5 bg-[rgba(255,255,255,0.46)] backdrop-blur-xs">
            <Instagram
              strokeWidth="1.5px"
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
          </a>
        </div>
        <Link className="button w-full text-body" to="/Main">
          RUWDRESS
        </Link>
      </div>
    </div>
  );
};

export default Contact;
