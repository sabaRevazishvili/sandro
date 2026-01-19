import React from "react";

const ShopCard = ({ title, price, image }) => {
  return (
    <div className="overflow-hidden flex flex-col items-center gap-6 rounded-xl border shadow-sm justify-center">
      <img src={image} className=" w-full h-100 object-cover" />
      <div className=" flex flex-col justify-center items-center pb-5">
        <h3 className="font-semibold text-lg text-center">{title}</h3>
        <p className="text-gray-600 text-center">${price}</p>
      </div>
    </div>
  );
};

export default ShopCard;
