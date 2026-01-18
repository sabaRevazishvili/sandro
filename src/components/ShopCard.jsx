import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const ShopCard = ({ title, price, image }) => {
  return (
    <Card className="overflow-hidden">
      <img src={image} className="w-full h-80 object-cover" />
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg text-center">{title}</h3>
        <p className="text-gray-600 text-center">${price}</p>
      </CardContent>
    </Card>
  );
};

export default ShopCard;
