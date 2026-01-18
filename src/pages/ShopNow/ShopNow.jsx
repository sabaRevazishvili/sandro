import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";

const ShopNow = () => {
  return (
    <div className="bg-shop-now flex justify-center items-center">
      <Button asChild variant="secondary">
        <Link className="md:px-7 md:py-5" to="../Main">
          Shop Now
        </Link>
      </Button>
    </div>
  );
};

export default ShopNow;
