import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { addToCartAction } from "@/context/actionCreator";
import { useCart } from "../context/useCart";
import { Heart } from "lucide-react";
import Slider from "./Slider";

const ShopCard = ({ item }) => {
  const { dispatch } = useCart();
  const [sliderIsOpen, setSliderIsOpen] = useState(false);
  const [sizeOpen, setSizeOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      onMouseOver={() => setSliderIsOpen(true)}
      onMouseLeave={() => {
        setSliderIsOpen(false);
        setSizeOpen(false);
      }}
      onClick={() => navigate(`/Description/${item.id}`)}
      className="relative overflow-hidden flex flex-col items-center gap-6 rounded-xl border shadow-sm justify-center "
    >
      <div className="lg:hidden w-full">
        <div className="w-full h-100">
          <Slider imgs={item.sliderImgs} shouldWrap shop />
        </div>
      </div>

      <div className="hidden lg:block w-full">
        {sliderIsOpen ? (
          <div className="w-full h-100">
            <Slider imgs={item.sliderImgs} shouldWrap shop />
          </div>
        ) : (
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-100 object-cover"
          />
        )}
      </div>
      <div className=" flex flex-col justify-center items-center pb-5 pt-4">
        <h3 className="font-semibold text-lg text-center">{item.title}</h3>
        <p className="text-gray-600 text-center">{item.price} GEL</p>
        <button
          className="absolute top-3 right-3 w-8 h-8"
          onClick={(e) => {
            e.stopPropagation();
            setSizeOpen(!sizeOpen);
          }}
        >
          <Heart />
        </button>
        {sizeOpen && (
          <div
            className="absolute top-1 left-1 flex flex-row gap-4 justify-center items-center p-1.5"
            style={{
              background: "hsla(0, 0%, 0%, 0.1)", // Slight dark tint
              backdropFilter: "blur(0.75em) saturate(180%)",
              WebkitBackdropFilter: "blur(0.75em) saturate(180%)",
              boxShadow:
                "0 0 0 1px hsla(0, 0%, 100%, 0.3) inset, 0 8px 32px rgba(0, 0, 0, 0.1)",
              border: "1px solid hsla(0, 0%, 100%, 0.18)",
            }}
          >
            {item.sizes.map((size) => (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch(addToCartAction(item, size));
                  setSizeOpen(false);
                }}
                key={size}
                className="aspect-square w-10"
                style={{
                  boxShadow: "0 0 0 0.1em hsla(0, 0%, 100%, 0.3)",
                  WebkitBackdropFilter: "blur(0.75em)",
                }}
              >
                {size}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopCard;
