import React from "react";
import { Link } from "react-router-dom";

const ShopNow = () => {
  return (
    <div className="bg-shop-now flex justify-center items-center">
      <Link className="button" to="../Main">
        Shop Now
      </Link>
    </div>
  );
};

export default ShopNow;
