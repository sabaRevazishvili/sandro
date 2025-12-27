import React from "react";
import sandrobg from "../../assets/images/sandro-bg.jpg";
import { Link } from "react-router-dom";

const ShopNow = () => {
  return (
    <div>
      <img src={sandrobg} />
      <Link to="../Main">Shop Now</Link>
    </div>
  );
};

export default ShopNow;
