import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { addToCartAction } from "@/context/actionCreator";
import { useCart } from "../context/useCart";
import { Heart } from "lucide-react";
import Slider from "./Slider";

const ShopCard = ({ item }) => {
  const { dispatch } = useCart();
  const [sliderIsOpen, setSliderIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      onMouseOver={() => setSliderIsOpen(true)}
      onMouseLeave={() => setSliderIsOpen(false)}
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
            dispatch(addToCartAction(item));
          }}
        >
          <Heart />
        </button>
      </div>
    </div>
  );
};

export default ShopCard;
